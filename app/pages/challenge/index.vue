<script setup lang="ts">
useSeoMeta({
  title: "20-Hour Challenge: Deep LLM Foundations | Netomia",
  description: "A focused, self-directed 20-hour challenge that takes you from shallow LLM familiarity to a real working mental model of how modern LLMs work.",
})

const isAiEngineeringWaitlistOpen = ref(false)

function pseudoRandom(seed: number) {
  return ((seed * 9301 + 49297) % 233280) / 233280
}

const pipelineMatrices = computed(() => {
  const numMatrices = 3
  const cellsPerSide = 3
  const total = cellsPerSide * cellsPerSide
  const startPad = 0.5
  const matrixDuration = 0.85
  return Array.from({ length: numMatrices }, (_, m) => ({
    id: m,
    cells: Array.from({ length: total }, (_, i) => {
      const r = Math.floor(i / cellsPerSide)
      const c = i % cellsPerSide
      const delay = startPad + m * matrixDuration + (r + c) * 0.05
      const intensitySeed = pseudoRandom(m * 31 + i * 137)
      const intensity = intensitySeed < 0.34 ? "low" : intensitySeed < 0.68 ? "mid" : "high"
      return {
        id: `${m}-${i}`,
        delay: delay.toFixed(2),
        intensity,
      }
    }),
  }))
})
</script>

<template>
  <header class="page-header" aria-label="Document metadata">
    <div class="ph-inner">
      <NuxtLink to="/" class="ph-brand">netomia<span class="brand-dot">.</span></NuxtLink>
      <span class="ph-divider" aria-hidden="true">/</span>
      <span class="ph-path">challenge/deep-llm-foundations</span>
      <span class="ph-spacer"></span>
      <span class="ph-status">
        <span class="ph-status-dot" aria-hidden="true"></span>
        BETA · v0.1
      </span>
    </div>
  </header>

  <main class="page">
    <section class="hero">
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

          <div class="hero-actions">
            <a href="#join" class="hero-action hero-action-primary">Join the challenge</a>
            <a href="#how-it-works" class="hero-action hero-action-ghost">
              See how it works
              <span class="hero-action-icon" aria-hidden="true">↓</span>
            </a>
          </div>

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
                  :class="['pipe-cell', `pipe-cell-${cell.intensity}`]"
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
          You'll study and implement the core mechanics behind modern LLMs — so you can build, reason clearly, and test new ideas.
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
            title="AI engineering challenge — coming soon"
            @click="isAiEngineeringWaitlistOpen = true"
          >agents, MCP, RAG pipelines, prompt patterns<span class="inline-link-icon" aria-hidden="true">↗</span></button>, or memorizing definitions for a quiz.
          This challenge is about the foundations: theory and implementation. You'll study and
          build concepts from scratch to develop real intuition for how modern LLMs work.
        </p>
      </article>

      <article id="who-it-is-for" class="panel">
        <p class="panel-number">03</p>
        <h2 class="panel-title">For curious people who <em>want</em> to go deep.</h2>

        <ul class="traits">
          <li>You want to go past tools and APIs into the actual mechanics: self-attention, embeddings, KV cache, RoPE, LoRA, quantization, and more.</li>
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
              roadmap of resources and tips that worked for us and for previous learners.
            </p>
          </article>

          <article class="step-card">
            <p class="step-number">03</p>
            <h3 class="step-label">Work</h3>
            <p class="step-copy">
              You spend 20 hours studying, learning, and building — at your own pace.
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

      <p class="cta-subtitle">
        Start today. Just 20 hours of real work gets you ahead. Not 200 hours of intention.
      </p>

      <div class="cta-actions">
        <button type="button" class="button cta-button">
          Join the free challenge
          <span class="cta-arrow" aria-hidden="true">→</span>
        </button>
        <a class="cta-questions" href="mailto:hello@netomia.com">
          Questions? Contact us
          <span class="cta-link-icon" aria-hidden="true">↗</span>
        </a>
      </div>
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
/* ═════════════════════════════════════════════════════════════════ */
/* Top metadata strip — fixed header bar above all content.           */
/* Reframes the page as a technical document, not a marketing page.   */
/* ═════════════════════════════════════════════════════════════════ */

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 42px;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  z-index: 40;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.ph-inner {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.6rem;
  gap: 0.7rem;
  width: 100%;
}

.ph-brand {
  color: var(--fg-soft);
  text-decoration: none;
  transition: color 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.ph-brand:hover {
  color: var(--fg);
}

.ph-divider {
  color: var(--border);
}

.ph-path {
  color: var(--muted-strong);
}

.ph-spacer {
  flex: 1;
}

.ph-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted-strong);
}

.ph-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--muted-strong);
  animation: ph-pulse 2.6s ease-in-out infinite;
}

@keyframes ph-pulse {
  0%, 100% {
    background: var(--muted-strong);
    transform: scale(1);
  }
  50% {
    background: var(--fg);
    transform: scale(1.2);
  }
}

.page {
  padding-top: 5.5rem;
}

.hero,
.overview,
.cta {
  width: min(100%, 52rem);
  margin: 0 auto;
}

.overview {
  margin-top: 3.5rem;
}

.cta {
  margin-top: 2.5rem;
}

.title {
  margin: 0;
  font-weight: 400;
  line-height: 1;
}

.title-prefix {
  display: block;
  font-size: clamp(1.3rem, 2.4vw, 1.6rem);
  color: var(--fg-soft);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.title-topic {
  display: block;
  margin-top: 0.85rem;
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
  padding: 4.2rem 0 4.4rem;
  border-top: 1px solid var(--border);
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
  font-variant-numeric: tabular-nums;
}

.panel-title,
.section-title {
  margin: 0;
  font-size: clamp(1.5rem, 4.2vw, 2.2rem);
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
  max-width: 42rem;
  margin: 1rem 0 0;
  color: var(--muted);
  line-height: 1.76;
}

.traits + .panel-copy,
.steps-grid + .panel-copy {
  margin-top: 2.4rem;
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
  transition: color 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.inline-link:hover {
  color: var(--fg-soft);
}

.inline-link:focus-visible {
  outline: 2px solid var(--fg);
  outline-offset: 3px;
}

.inline-link-icon {
  display: inline-block;
  margin-left: 0.15em;
  font-size: 0.95em;
  line-height: 1;
  opacity: 0.65;
  text-decoration: none;
  transform: translateY(-0.08em);
  transition: opacity 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.inline-link:hover .inline-link-icon {
  opacity: 1;
}

.transformation {
  display: flex;
  align-items: stretch;
  gap: 1.3rem;
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
  font-size: 1.9rem;
  line-height: 1;
}


.hero-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
}

.hero-text {
  min-width: 0;
}

.hero-text .intro {
  margin-top: 1rem;
}

.hero-text .intro.intro-strong {
  margin-top: 3rem;
}

.hero-text .intro.intro-strong + .intro {
  margin-top: 2.8rem;
}

.hero-graphic {
  padding-top: 0.55rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 2.6rem 0 1.2rem;
}

.hero-actions + .intro {
  margin-top: 1.2rem;
  font-size: 0.9rem;
  color: var(--muted-strong);
  line-height: 1.65;
}

.hero-action {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.78rem 1.3rem;
  font: inherit;
  font-size: 0.94rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--fg);
  background: transparent;
  color: var(--fg);
  transition:
    background 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    color 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    opacity 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hero-action-primary {
  background: var(--fg);
  color: var(--bg);
}

.hero-action-primary:hover {
  opacity: 0.86;
}

.hero-action-ghost {
  border-color: var(--border);
  color: var(--fg-soft);
}

.hero-action-ghost:hover {
  border-color: var(--fg);
  color: var(--fg);
}

.hero-action-icon {
  display: inline-block;
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.hero-action-ghost:hover .hero-action-icon {
  transform: translateY(3px);
}

.hero-action:focus-visible {
  outline: 2px solid var(--fg);
  outline-offset: 2px;
}

.anim-pipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
}

.pipe-endpoint {
  width: 32px;
  height: 32px;
  background: var(--border);
  animation: pipe-endpoint 5s ease-in-out infinite;
}

.pipe-start { animation-delay: 0s; }
.pipe-end { animation-delay: 2.8s; }

@keyframes pipe-endpoint {
  0%, 26%, 100% { background: var(--border); }
  6%, 18% { background: var(--fg); }
}

.pipe-arrow {
  color: var(--muted-strong);
  font-size: 1.2rem;
  line-height: 1;
}

.pipe-matrix {
  display: grid;
  grid-template-columns: repeat(3, 24px);
  grid-template-rows: repeat(3, 24px);
  gap: 4px;
  padding: 5px;
  border: 1px solid var(--border);
}

.pipe-cell {
  width: 24px;
  height: 24px;
  background: var(--border);
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.pipe-cell-low {
  animation-name: pipe-cell-low;
}

.pipe-cell-mid {
  animation-name: pipe-cell-mid;
}

.pipe-cell-high {
  animation-name: pipe-cell-high;
}

@keyframes pipe-cell-low {
  0%, 26%, 100% { background: var(--border); }
  6%, 18% { background: var(--muted-strong); }
}

@keyframes pipe-cell-mid {
  0%, 26%, 100% { background: var(--border); }
  6%, 18% { background: var(--fg-soft); }
}

@keyframes pipe-cell-high {
  0%, 26%, 100% { background: var(--border); }
  6%, 18% { background: var(--fg); }
}

.traits {
  list-style: none;
  max-width: 42rem;
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
  margin-top: 2rem;
}

.step-card {
  padding: 1.8rem 2rem 2.2rem;
  border: 1px solid var(--border);
  background: var(--bg-soft);
}

.step-number {
  margin: 0;
  color: var(--muted-strong);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  font-variant-numeric: tabular-nums;
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
  color: var(--fg);
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.02em;
  text-wrap: pretty;
}

.cta-subtitle {
  margin: 1.2rem 0 0;
  max-width: 42rem;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.7;
  text-wrap: pretty;
}

.cta-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  margin-top: 2rem;
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
  transition: transform 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.cta-button:hover .cta-arrow {
  transform: translateX(3px);
}

.cta-questions {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--muted);
  font-size: 0.92rem;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    color 200ms cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 200ms cubic-bezier(0.2, 0.7, 0.2, 1);
}

.cta-questions:hover {
  color: var(--fg-soft);
  border-bottom-color: currentColor;
}

.cta-link-icon {
  display: inline-block;
  margin-left: 0.1em;
  font-size: 0.95em;
  line-height: 1;
  opacity: 0.7;
  transform: translateY(-0.08em);
}

#join:target {
  animation: target-flash-cta 1.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

#how-it-works:target .panel-title {
  animation: target-flash-title 1.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

@keyframes target-flash-cta {
  0%, 30% { border-color: var(--border); }
  40%, 55% { border-color: var(--fg); }
  100% { border-color: var(--border); }
}

@keyframes target-flash-title {
  0%, 30% { color: var(--fg-soft); }
  40%, 55% { color: var(--fg); }
  100% { color: var(--fg-soft); }
}

@media (prefers-reduced-motion: reduce) {
  #join:target,
  #how-it-works:target .panel-title {
    animation: none;
  }
}

@media (max-width: 640px) {
  .ph-inner {
    padding: 0 1rem;
  }

  .ph-path,
  .ph-divider {
    display: none;
  }

  .overview {
    margin-top: 2.6rem;
  }

  .cta {
    margin-top: 1.8rem;
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
    margin-top: 0.65rem;
  }

  .intro {
    margin-top: 1.4rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 0.65rem;
    margin: 2rem 0;
  }

  .hero-action {
    justify-content: center;
    padding: 0.85rem 1.2rem;
  }

  .hero-text .intro.intro-strong {
    margin-top: 2.2rem;
    font-size: 1.08rem;
  }

  .panel {
    display: block;
    padding: 3rem 0 3.2rem;
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
