<script setup lang="ts">
const isWaitlistOpen = ref(false)
</script>

<template>
  <main class="page">
    <section class="content">
      <h1 class="brand">netomia<span class="brand-dot">.</span></h1>

      <p class="copy copy-highlight">
        Learning should be hard.
      </p>

      <p class="copy">
        Most online education is built for convenience: fast, entertaining, easy to consume.
        It feels productive, but it rarely leads to true understanding.
      </p>

      <p class="copy">
        That's why we're building Netomia: a place for people who are serious about AI and want
        depth, challenge, immersion, and the kind of expertise that only comes from real, sustained effort.
      </p>

      <p class="copy">
        We won't hold your hand. We'll give you the environment to do the hard work.
      </p>

      <div class="divider" aria-hidden="true" />

      <p class="copy copy-accent">
        Our pilot offering is now live:
      </p>

      <p class="copy">
        A 20-hour <em>Deep LLM Foundations</em> challenge — built to give you real intuition
        for how modern LLMs actually work.
      </p>

      <p class="copy copy-emphasis">
        Completely free.
      </p>

      <div class="actions">
        <NuxtLink to="/challenge" class="button">
          See the challenge &rarr;
        </NuxtLink>

        <button type="button" class="text-link" @click="isWaitlistOpen = true">
          Join the waitlist for updates
        </button>
      </div>

      <footer class="footer">
        © 2026 Netomia
      </footer>
    </section>

    <WaitlistModal v-model:open="isWaitlistOpen" source="landing-modal" />
  </main>
</template>

<style scoped>
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

.copy {
  margin: 1.4rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.76;
}

.copy:first-of-type {
  margin-top: 2rem;
}

.copy-highlight {
  color: var(--fg);
}

.copy-accent {
  color: var(--fg-soft);
}

.copy-emphasis {
  color: var(--fg-soft);
  font-size: 1.08rem;
  line-height: 1.6;
}

.divider {
  margin-top: 2.2rem;
}

.actions {
  margin-top: 2.35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.15rem;
}

.footer {
  margin-top: 4rem;
  color: var(--muted);
  font-size: 0.875rem;
}

@media (max-width: 640px) {
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
}
</style>
