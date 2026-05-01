export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<{ email?: string }>(event)
  const email = body.email?.trim() || ""

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Enter your email address.",
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Enter a valid email address.",
    })
  }

  if (!config.waitlistProviderUrl) {
    console.error("Missing WAITLIST_PROVIDER_URL runtime config")

    throw createError({
      statusCode: 500,
      statusMessage: "Waitlist is not configured.",
    })
  }

  const formData = new FormData()
  formData.append("email", email)
  formData.append("_subject", "New Netomia signup")
  formData.append("source", "landing-modal")

  try {
    const response = await fetch(config.waitlistProviderUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })

    const data = await response.json().catch(() => null) as {
      errors?: Array<{ message?: string }>
    } | null

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: data?.errors?.[0]?.message || "Could not submit right now. Try again in a moment.",
      })
    }

    if (data?.errors?.[0]?.message) {
      throw createError({
        statusCode: 400,
        statusMessage: data.errors[0].message,
      })
    }

    return { ok: true }
  } catch (error) {
    if (isError(error)) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Could not submit right now. Try again in a moment.",
    })
  }
})
