<script setup lang="ts">
const isWaitlistOpen = ref(false)
const isWaitlistSubmitted = ref(false)
const email = ref("")
const errorMessage = ref("")
const modalRef = ref<HTMLElement | null>(null)
const emailInputRef = ref<HTMLInputElement | null>(null)
const lastFocusedElement = ref<HTMLElement | null>(null)

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))

function focusEmailInput() {
  nextTick(() => {
    emailInputRef.value?.focus()
  })
}

function openWaitlist() {
  lastFocusedElement.value = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null
  isWaitlistOpen.value = true
  isWaitlistSubmitted.value = false
  errorMessage.value = ""
  focusEmailInput()
}

function closeWaitlist() {
  isWaitlistOpen.value = false
  isWaitlistSubmitted.value = false
  email.value = ""
  errorMessage.value = ""
  lastFocusedElement.value?.focus()
}

function submitWaitlist() {
  if (!isEmailValid.value) {
    errorMessage.value = email.value.trim()
      ? "Enter a valid email address."
      : "Enter your email address."
    focusEmailInput()
    return
  }

  errorMessage.value = ""
  isWaitlistSubmitted.value = true
}

function handleKeydown(event: KeyboardEvent) {
  if (!isWaitlistOpen.value) {
    return
  }

  if (event.key === "Escape") {
    event.preventDefault()
    closeWaitlist()
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

watch(email, () => {
  if (errorMessage.value && isEmailValid.value) {
    errorMessage.value = ""
  }
})

onMounted(() => {
  window.addEventListener("keydown", handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown)
})
</script>

<template>
  <main class="page">
    <section class="content">
      <h1 class="brand">netomia<span class="brand-dot">.</span></h1>

      <p class="copy copy-highlight">
        Learning should be hard.
      </p>

      <p class="copy">
        Most online education is built for convenience: fast, entertaining, easy to consume. It may
        feel productive, but it rarely leads to true understanding.
      </p>

      <p class="copy">
        That's why we're building Netomia: a place for people who are serious about AI and want immersion, depth, challenge,
        and the kind of expertise that only comes from real, sustained effort.
      </p>

      <p class="copy">
        We won't hold your hand. We'll give you the environment to do the hard work.
      </p>

      <div class="divider" aria-hidden="true" />

      <p class="copy copy-accent">
        Our first offering is now live:
      </p>

      <p class="copy">
        A 20-hour LLM literacy challenge designed to bring you up to speed with modern LLM development.
      </p>

      <p class="copy copy-emphasis">
       Completely free. 
      </p>

      <div class="actions">
        <button type="button" class="button" @click="openWaitlist">
          Join the waitlist
        </button>

        <p class="action-note">
          Updates, releases, and early access.
        </p>
      </div>

      <footer class="footer">
        © 2026 Netomia
      </footer>
    </section>

    <div v-if="isWaitlistOpen" class="modal-backdrop" @click="closeWaitlist">
      <div
        ref="modalRef"
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        aria-describedby="waitlist-description"
        @click.stop
      >
        <template v-if="!isWaitlistSubmitted">
          <h2 id="waitlist-title" class="modal-title">Get updates</h2>
          <p id="waitlist-description" class="modal-copy">
            Sign up to hear about updates, releases, and early access.
          </p>

          <form class="modal-form" @submit.prevent="submitWaitlist">
            <input
              ref="emailInputRef"
              v-model="email"
              class="input"
              type="email"
              name="email"
              placeholder="Email address"
              autocomplete="email"
              :aria-invalid="errorMessage ? 'true' : 'false'"
              aria-describedby="waitlist-feedback"
            />

            <button type="submit" class="button button-submit">
              Join
            </button>
          </form>

          <p id="waitlist-feedback" class="form-feedback" :class="{ 'form-feedback-visible': errorMessage }">
            {{ errorMessage || "" }}
          </p>
        </template>

        <template v-else>
          <h2 id="waitlist-title" class="modal-title">You're in.</h2>
          <p id="waitlist-description" class="modal-copy">
            Thanks. We’ll reach out when there’s something worth sending.
          </p>
        </template>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page {
  --bg: #171819;
  --fg: #f1e8dc;
  --fg-soft: #ddd3c6;
  --muted: #a39a8f;
  --border: #3c4043;
  --muted-strong: #8d867d;
  min-height: 100vh;
  padding: 72px 24px 56px;
  background: var(--bg);
  color: var(--fg);
  font-family: "SF Mono", "SFMono-Regular", ui-monospace, monospace;
}

.content {
  width: min(100%, 46rem);
  margin: 0 auto;
}

.brand {
  margin: 0;
  font-size: clamp(1.75rem, 4vw, 2rem);
  font-weight: 400;
  line-height: 0.94;
  letter-spacing: -0.07em;
  text-transform: lowercase;
}

.brand-dot {
  margin-left: 0.04em;
  opacity: 0.78;
}

.copy {
  margin: 1.4rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.76;
}

.copy:first-of-type {
  margin-top: 2rem;
}

.actions {
  margin-top: 2.35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.0rem;
}

.action-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

.divider {
  width: 100%;
  max-width: 3.5rem;
  margin-top: 2.2rem;
  border-top: 1px solid var(--border);
}

.copy-emphasis {
  color: var(--fg-soft);
  font-size: 1.08rem;
  line-height: 1.6;
}

.copy-highlight {
  color: var(--fg);
}

.copy-accent {
  color: var(--fg-soft);
}

.button,
.text-link,
.input {
  font: inherit;
}

.button,
.text-link {
  cursor: pointer;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fg);
  background: var(--fg);
  color: var(--bg);
  padding: 0.62rem 0.9rem;
  text-decoration: none;
}

.button:hover {
  opacity: 0.82;
}

.text-link {
  display: inline-block;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--fg);
  text-decoration: underline;
}

.text-link:hover {
  text-underline-offset: 0.18em;
}

.footer {
  margin-top: 4rem;
  color: var(--muted);
  font-size: 0.875rem;
}

.button:focus-visible,
.text-link:focus-visible,
.input:focus-visible {
  outline: 2px solid var(--fg);
  outline-offset: 2px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgb(0 0 0 / 55%);
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
  min-height: 1.2rem;
  color: var(--muted-strong);
  font-size: 0.82rem;
  line-height: 1.45;
}

.form-feedback-visible {
  color: #e0b4aa;
}

@media (max-width: 640px) {
  .page {
    padding: 40px 20px 48px;
  }

  .copy {
    margin-top: 1.2rem;
    line-height: 1.7;
  }

  .copy:first-of-type {
    margin-top: 1.6rem;
  }

  .divider {
    margin-top: 1.9rem;
  }

  .actions {
    margin-top: 2rem;
  }

  .footer {
    margin-top: 3rem;
  }

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
