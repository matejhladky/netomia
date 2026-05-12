<script setup lang="ts">
interface Props {
  open: boolean
  title?: string
  description?: string
  submitLabel?: string
  source?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: "Join Netomia",
  description: "Sign up to hear about updates, releases, and early access.",
  submitLabel: "Join",
  source: "landing-modal",
})

const emit = defineEmits<{
  "update:open": [value: boolean]
}>()

const id = useId()
const titleId = `${id}-title`
const descId = `${id}-description`
const feedbackId = `${id}-feedback`

const isSubmitted = ref(false)
const isSubmitting = ref(false)
const email = ref("")
const feedbackMessage = ref("")
const errorMessage = ref("")
const modalRef = ref<HTMLElement | null>(null)
const emailInputRef = ref<HTMLInputElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)

function resetState() {
  isSubmitted.value = false
  isSubmitting.value = false
  feedbackMessage.value = ""
  errorMessage.value = ""
}

function focusEmailInput() {
  nextTick(() => {
    emailInputRef.value?.focus()
  })
}

function close() {
  emit("update:open", false)
}

async function submit() {
  if (isSubmitting.value) {
    return
  }

  isSubmitting.value = true
  errorMessage.value = ""

  try {
    await $fetch("/api/waitlist", {
      method: "POST",
      body: {
        email: email.value,
        source: props.source,
      },
    })

    feedbackMessage.value = "Thanks. We’ll reach out when there’s something worth sending."
    isSubmitted.value = true
    email.value = ""
  } catch (error) {
    errorMessage.value = error instanceof Error && "data" in error
      ? String((error as { data?: { statusMessage?: string } }).data?.statusMessage || error.message)
      : error instanceof Error
        ? error.message
        : "Could not submit right now. Try again in a moment."
    focusEmailInput()
  } finally {
    isSubmitting.value = false
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.open) {
    return
  }

  if (event.key === "Escape") {
    event.preventDefault()
    close()
    return
  }

  if (event.key !== "Tab" || !modalRef.value) {
    return
  }

  const focusableElements = modalRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  )

  if (!focusableElements.length) {
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  } else if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(() => props.open, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  if (isOpen) {
    lastFocusedElement.value = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null
    resetState()
    email.value = ""
    focusEmailInput()
    window.addEventListener("keydown", handleKeydown)
    return
  }

  window.removeEventListener("keydown", handleKeydown)
  lastFocusedElement.value?.focus()
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }

  window.removeEventListener("keydown", handleKeydown)
})
</script>

<template>
  <div v-if="open" class="modal-backdrop" @click="close">
    <div
      ref="modalRef"
      class="modal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="titleId"
      :aria-describedby="descId"
      @click.stop
    >
      <template v-if="!isSubmitted">
        <h2 :id="titleId" class="modal-title">{{ title }}</h2>
        <p :id="descId" class="modal-copy">
          {{ description }}
        </p>

        <form class="modal-form" @submit.prevent="submit">
          <label class="sr-only" :for="`${id}-email`">Enter your email</label>
          <input
            :id="`${id}-email`"
            ref="emailInputRef"
            v-model="email"
            class="input"
            type="email"
            name="email"
            placeholder="Email address"
            autocomplete="email"
            required
            :aria-invalid="errorMessage ? 'true' : 'false'"
            :aria-describedby="errorMessage ? feedbackId : undefined"
          />

          <button type="submit" class="button button-submit" :disabled="isSubmitting">
            {{ isSubmitting ? `${submitLabel}...` : submitLabel }}
          </button>
        </form>

        <p
          v-if="errorMessage"
          :id="feedbackId"
          class="form-feedback form-feedback-error"
          role="alert"
          aria-live="polite"
        >
          {{ errorMessage }}
        </p>
      </template>

      <template v-else>
        <h2 :id="titleId" class="modal-title">You're in!</h2>
        <p :id="descId" class="modal-copy">
          {{ feedbackMessage }}
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgb(0 0 0 / 55%);
  z-index: 50;
}

.modal {
  width: min(100%, 28rem);
  border: 1px solid var(--border);
  background: var(--bg);
  padding: 1rem;
}

.modal-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
}

.modal-copy {
  margin: 0.9rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.modal-form {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.input {
  flex: 1 1 auto;
  width: 100%;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--fg);
  padding: 0.72rem 0.8rem;
  font: inherit;
}

.input::placeholder {
  color: var(--muted-strong);
}

.button-submit {
  flex: 0 0 auto;
  white-space: nowrap;
}

.form-feedback {
  margin: 0.7rem 0 0;
  color: var(--muted-strong);
  font-size: 0.82rem;
  line-height: 1.45;
}

.form-feedback-error {
  color: #e0b4aa;
}

@media (max-width: 640px) {
  .modal {
    padding: 0.9rem;
  }

  .modal-form {
    flex-direction: column;
  }

  .button-submit {
    align-self: flex-start;
  }
}
</style>
