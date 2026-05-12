<script setup lang="ts">
useSeoMeta({
  title: "20-Hour Challenge: Deep LLM Foundations | Netomia",
  description: "A focused, self-directed 20-hour challenge that takes you from shallow LLM familiarity to a real working mental model of how modern LLMs work.",
})

const isAiEngineeringWaitlistOpen = ref(false)

/* Hero graphic: a token passes vertically through three weight
   matrices. Each matrix's cells ripple with activation in sequence,
   suggesting "this is the system being computed." */
const pipelineMatrices = computed(() => {
  const numMatrices = 3
  const cellsPerSide = 3
  const total = cellsPerSide * cellsPerSide
  const startPad = 0.55
  const matrixDuration = 1.3
  return Array.from({ length: numMatrices }, (_, m) => ({
    id: m,
    cells: Array.from({ length: total }, (_, i) => {
      const r = Math.floor(i / cellsPerSide)
      const c = i % cellsPerSide
      const delay = startPad + m * matrixDuration + (r + c) * 0.07
      return {
        id: `${m}-${i}`,
        delay: delay.toFixed(2),
      }
    }),
  }))
})
</script>

<template>
  <main class="page">
    <section class="hero">
      <NuxtLink to="/" class="back-link">
        netomia<span class="brand-dot">.</span>
      </NuxtLink>

      <div class="hero-status">
        <span class="status-badge">
          <span class="status-dot" aria-hidden="true"></span>
          BETA
        </span>
      </div>

      <div class="hero-grid">
        <div class="hero-text">
          <h1 class="title">
            <span class="title-prefix">Free 20-hour Learning Challenge:</span>
            <em class="title-topic title-emphasis">Deep LLM Foundations</em>
          </h1>

          <p class="intro intro-strong">
            A self-directed challenge for technical learners who want to understand modern LLMs from first principles — not just use APIs.
          </p>

          <p class="intro">
            20 hours is enough to learn most skills reasonably well, but most people take years to start the first one.
          </p>
          <p class="intro">
            We built this challenge for ourselves — after seeing great results, we decided to share it with others for free.
          </p>
        </div>

        <div class="hero-graphic" aria-hidden="true">
          <div class="anim-pipe">
            <div class="pipe-endpoint pipe-start"></div>
            <span class="pipe-arrow">↓</span>
            <template v-for="m in pipelineMatrices" :key="`pipe-${m.id}`">
              <div :class="['pipe-matrix', `pm${m.id}`]">
                <span
                  v-for="cell in m.cells"
                  :key="cell.id"
                  class="pipe-cell"
                  :style="{ animationDelay: `${cell.delay}s` }"
                />
              </div>
              <span class="pipe-arrow">↓</span>
            </template>
            <div class="pipe-endpoint pipe-end"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="overview" class="overview">
      <article id="what-it-is" class="panel">
        <p class="panel-number">01</p>
        <h2 class="panel-title">Build real intuition for how modern LLMs work from scratch.</h2>

        <p class="panel-copy">
          A free, self-directed 20-hour challenge. You study and implement the core mechanics behind modern LLMs — so you can build, reason clearly, and test new ideas.
        </p>

        <div class="transformation">
          <div class="quote-card">
            <em>"I've heard of attention."</em>
          </div>
          <span class="quote-arrow" aria-hidden="true">→</span>
          <div class="quote-card quote-card-after">
            <em>"I can rebuild the core of an LLM from first principles."</em>
          </div>
        </div>

      </article>

      <article id="what-it-isnt" class="panel">
        <p class="panel-number">02</p>
        <h2 class="panel-title">Not&nbsp;a&nbsp;course. Not&nbsp;a&nbsp;tutorial&nbsp;library. Not&nbsp;AI-app&nbsp;glue&nbsp;work.</h2>
        
        <p class="panel-copy">
          We don't make the materials — enough good ones already exist. We give you the structure to actually use them.
        </p>
        <p class="panel-copy">
          It is not about <button
            type="button"
            class="inline-link"
            @click="isAiEngineeringWaitlistOpen = true"
          >agents, MCP, RAG pipelines, prompt patterns</button>, or memorizing definitions for a quiz.
          This challenge is about the foundations: theory and implementation. You'll study and
          build concepts from scratch to develop real intuition for how modern LLMs work. 
        </p>
      </article>

      <article id="who-it-is-for" class="panel">
        <p class="panel-number">03</p>
        <h2 class="panel-title">For curious people who <em>want</em> to go deep.</h2>

        <ul class="traits">
          <li>You want to go past tools and APIs into the actual mechanics: self-attention, embeddings, KV cache, RoPE, LoRA, quantization, ...</li>
          <li>You're willing to sit with ambiguity and push through the effort of figuring things out yourself.</li>
          <li>You've got some baseline in programming, maths, and ML — even rough. You'll fill the gaps as you go.</li>
        </ul>
        <p class="panel-copy">
          Backgrounds will vary. The point isn't to start from the same place, but to have the same target.
          If that means a few extra hours brushing up on maths or tensor operations, so be it.
          <em>The only thing that matters is whether you're making progress.</em>
        </p>
      </article>

      <article id="how-it-works" class="panel">
        <p class="panel-number">04</p>
        <h2 class="panel-title">How it works</h2>

        <div class="steps-grid">
          <article class="step-card">
            <p class="step-number">01</p>
            <h3 class="step-label">Start</h3>
            <p class="step-copy">
              You get a detailed brief and a 20-hour target for focused, deep learning.
              You'll know exactly what "done" looks like before you start.
            </p>
          </article>

          <article class="step-card">
            <p class="step-number">02</p>
            <h3 class="step-label">Plan</h3>
            <p class="step-copy">
              We help you deconstruct the target into the key areas to explore, and share a
              roadmap of resources & tips that worked for us and for previous learners.
            </p>
          </article>

          <article class="step-card">
            <p class="step-number">03</p>
            <h3 class="step-label">Work</h3>
            <p class="step-copy">
              You spend 20 hours studying, learning, and building - at your own pace.
              We're available for support throughout.
            </p>
          </article>

          <article class="step-card">
            <p class="step-number">04</p>
            <h3 class="step-label">Finish</h3>
            <p class="step-copy">
              You take a <em>final challenge</em> designed to test intuition and application —
              not memorization. We help you evaluate your submission.
            </p>
          </article>
        </div>

        <p class="panel-copy">
          You can adjust scope or topics to fit your needs — we give you the starting point and
          the target. The path is yours!
        </p>
      </article>
    </section>

    <section id="join" class="cta">
      <p class="cta-eyebrow">Ready to level up?</p>

      <h2 class="cta-headline">
        Understand modern LLMs from first principles.
      </h2>

      <div class="cta-actions">
        <button type="button" class="button cta-button">
          Join the free challenge
          <span class="cta-arrow" aria-hidden="true">→</span>
        </button>
      </div>

      <p class="cta-link">
        <a href="mailto:hello@netomia.com">
          Questions? Contact us
          <span class="cta-link-icon" aria-hidden="true">↗</span>
        </a>
      </p>
    </section>

    <WaitlistModal
      v-model:open="isAiEngineeringWaitlistOpen"
      title="AI Engineering Challenge"
      description="We may run a similar challenge for builders more interested in the AI-app side. Drop your email and we'll let you know!"
      submit-label="Notify me"
      source="ai-engineering-waitlist"
    />
  </main>
</template>

<style scoped>
.hero,
.overview,
.cta {
  width: min(100%, 52rem);
  margin: 0 auto;
}

.overview {
  margin-top: 2.6rem;
}

.cta {
  margin-top: 5rem;
}

.back-link {
  display: inline-block;
  color: var(--muted);
  font-size: 0.92rem;
  text-decoration: none;
  font: inherit;
}

.back-link:hover {
  opacity: 0.82;
}

.title {
  margin: 0;
  font-weight: 400;
  line-height: 1;
}

.title-prefix {
  display: block;
  font-size: clamp(1.4rem, 2.6vw, 1.8rem);
  color: var(--fg-soft);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.title-topic {
  display: block;
  margin-top: 0.5rem;
  font-size: clamp(2.6rem, 7.5vw, 4.4rem);
  color: var(--fg);
  letter-spacing: -0.05em;
  line-height: 0.94;
  white-space: nowrap;
}

.intro {
  max-width: 44rem;
  margin: 1.8rem 0 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.76;
}

.intro-strong {
  margin-top: 3rem;
  color: var(--fg);
  font-size: 1.18rem;
  line-height: 1.62;
  letter-spacing: -0.005em;
}

.panel {
  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 1.5rem;
  padding: 3.2rem 0 3.4rem;
  border-top: 1px solid var(--border);
}

.panel:last-child {
  border-bottom: 1px solid var(--border);
}

.panel > :not(.panel-number) {
  grid-column: 2;
}

.panel-number {
  grid-row: 1;
  margin: 0;
  padding-top: 0.6rem;
  color: var(--muted-strong);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
}

.panel-title,
.section-title {
  margin: 0;
  font-size: clamp(1.45rem, 4vw, 2rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.05em;
}

.panel-title {
  color: var(--fg-soft);
  text-wrap: pretty;
}

.panel-title em {
  font-style: italic;
}

.panel-copy {
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.76;
}

.panel-title + .panel-copy {
  margin-top: 1.5rem;
}

.inline-link {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
  transition: color 150ms ease;
}

.inline-link:hover {
  color: var(--fg-soft);
}

.transformation {
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin-top: 1.8rem;
}

.transformation .quote-card {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1.4rem;
  border: 1px solid var(--border);
  color: var(--fg);
  font-size: 0.98rem;
  line-height: 1.6;
  text-align: center;
}

.transformation .quote-card-after {
  background: var(--bg-soft);
  border-color: var(--fg);
}

.transformation .quote-arrow {
  align-self: center;
  flex: 0 0 auto;
  color: var(--fg);
  font-size: 1.5rem;
}

/* ─── Hero two-column layout ────────────────────────────────────── */
/* The entire hero content (title + intros + graphic) sits in a 2-col */
/* grid below the back-link. Both columns share the same top baseline */
/* — the title and the graphic's first token start at the same line.  */
/* Text column flexes, graphic column is auto-sized. On mobile, the   */
/* grid collapses to a single column.                                 */

.hero-status {
  margin-top: 3.2rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.22rem 0.6rem 0.2rem;
  border: 1px solid var(--border);
  color: var(--muted-strong);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  line-height: 1;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--muted-strong);
  animation: status-pulse 2.6s ease-in-out infinite;
}

@keyframes status-pulse {
  0%, 100% {
    background: var(--muted-strong);
    transform: scale(1);
  }
  50% {
    background: var(--fg);
    transform: scale(1.15);
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
  margin-top: 0.9rem;
}

.hero-text {
  min-width: 0;
}

.hero-text .intro-strong {
  margin-top: 2.4rem;
}

.hero-text .intro {
  margin-top: 1rem;
}

.hero-text .intro-strong + .intro {
  margin-top: 2.8rem;
}

.hero-graphic {
  /* Optical alignment: nudge down a hair so the first token's vertical
     center lands on the cap-height of the title-prefix's first line. */
  padding-top: 0.55rem;
}

/* ─── Pipeline animation (vertical) ─────────────────────────────── */
/* A token enters at the top, passes vertically through three weight  */
/* matrices, and exits at the bottom. Each matrix's cells ripple with */
/* activation as the token is being processed. ~7s cycle.             */

.anim-pipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
}

.pipe-endpoint {
  width: 22px;
  height: 22px;
  background: var(--border);
  animation: pipe-endpoint 7s ease-in-out infinite;
}

.pipe-start { animation-delay: 0s; }
.pipe-end { animation-delay: 5.4s; }

@keyframes pipe-endpoint {
  0%, 12%, 100% { background: var(--border); }
  3%, 9% { background: var(--fg); }
}

.pipe-arrow {
  color: var(--muted-strong);
  font-size: 1rem;
  line-height: 1;
}

.pipe-matrix {
  display: grid;
  grid-template-columns: repeat(3, 16px);
  grid-template-rows: repeat(3, 16px);
  gap: 3px;
  padding: 4px;
  border: 1px solid var(--border);
}

.pipe-cell {
  width: 16px;
  height: 16px;
  background: var(--border);
  animation: pipe-cell 7s ease-in-out infinite;
}

@keyframes pipe-cell {
  0%, 26%, 100% { background: var(--border); }
  6%, 18% { background: var(--fg-soft); }
}

.traits {
  list-style: none;
  margin: 1.7rem 0 0;
  padding: 0;
}

.traits li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--fg-soft);
  font-size: 1.06rem;
  line-height: 1.7;
}

.traits li + li {
  margin-top: 0.85rem;
}

.traits li::before {
  content: "→";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--fg);
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2.3rem;
}

.step-card {
  padding: 1.8rem 2rem 2.2rem;
  border: 1px solid var(--border);
}

.step-number {
  margin: 0;
  color: var(--muted-strong);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
}

.step-label {
  margin: 1.6rem 0 0;
  color: var(--fg-soft);
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.step-copy {
  margin: 1.1rem 0 0;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.75;
}

.cta {
  padding: 3rem 2.4rem 3.2rem;
  border: 1px solid var(--border);
  background: var(--bg-soft);
}

.cta-eyebrow {
  margin: 0;
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cta-headline {
  margin: 1.2rem 0 0;
  max-width: 36ch;
  color: var(--fg);
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2.4rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.4rem;
  font-size: 0.96rem;
  letter-spacing: 0.01em;
}

.cta-arrow {
  display: inline-block;
  transition: transform 150ms ease;
}

.cta-button:hover .cta-arrow {
  transform: translateX(2px);
}

.cta-link {
  margin: 1.5rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.cta-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 150ms ease, border-color 150ms ease;
}

.cta-link a:hover {
  color: var(--fg-soft);
  border-bottom-color: currentColor;
}

.cta-link-icon {
  font-size: 0.9em;
  opacity: 0.8;
}

@media (max-width: 640px) {
  .overview {
    margin-top: 2rem;
  }

  .cta {
    margin-top: 3.6rem;
    padding: 1.8rem 1.3rem 2rem;
  }

  .title {
    margin-top: 0;
  }

  .title-prefix {
    font-size: clamp(1.1rem, 4.5vw, 1.4rem);
  }

  .title-topic {
    font-size: clamp(2rem, 9vw, 3rem);
    margin-top: 0.4rem;
  }

  .intro {
    margin-top: 1.4rem;
  }

  .hero-text .intro-strong {
    margin-top: 1.8rem;
    font-size: 1.08rem;
  }

  .panel {
    display: block;
    padding: 2.4rem 0 2.6rem;
  }

  .panel-number {
    padding-top: 0;
  }

  .panel-title {
    margin-top: 0.6rem;
  }

  .traits {
    margin-top: 1.3rem;
  }

  .transformation {
    flex-direction: column;
  }

  .transformation .quote-arrow {
    transform: rotate(90deg);
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    margin-top: 2rem;
  }

  .hero-graphic {
    justify-self: center;
    padding-top: 0;
  }

  .anim-pipe {
    gap: 0.5rem;
  }

  .traits li {
    padding-left: 1.4rem;
    font-size: 1rem;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.8rem;
  }

  .step-card {
    padding: 1.4rem 1.4rem 1.6rem;
  }

  .step-label {
    margin-top: 1.2rem;
    font-size: 1.25rem;
  }

  .step-copy {
    margin-top: 0.9rem;
  }

  .cta-actions .button {
    padding: 0.78rem 1.2rem;
  }
}
</style>
