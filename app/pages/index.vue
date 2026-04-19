<template>
  <main class="min-h-screen bg-background text-text font-sans">

    <!-- HERO -->
    <section class="border-b border-border">
      <div class="container-page section-padding lg:grid lg:grid-cols-2 lg:gap-12">
        
        <!-- LEFT -->
        <div>
          <div class="text-sm mb-4 text-muted">
            Now live • Free 20-hour challenge
          </div>

          <h1 class="text-4xl font-display font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Master the Latent Space
          </h1>

          <p class="mt-6 text-lg text-muted">
            Netomia is an platform built for people that are serious about studying AI deeply.
            Go beyond shallow, passive learning and build real understanding.
          </p>

          <p class="mt-4 text-muted">
            Start with our first product: a free 20-hour challenge to build real literacy in modern LLMs.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/challenge/start"
              class="button-pill border-border text-text"
            >
              Start the free challenge
            </NuxtLink>
            <a href="#product" class="button-pill border-border text-text">
              See the challenge
            </a>
          </div>
        </div>

        <!-- RIGHT (placeholder) -->
        <div class="mt-10 lg:mt-0">
          <div class="aspect-[4/3] border border-border bg-surface" />
        </div>

      </div>
    </section>


    <!-- ABOUT -->
    <section class="border-b border-border">
      <div class="container-copy section-padding">
        <div class="text-xs uppercase tracking-widest text-muted">
          What is Netomia
        </div>

        <h2 class="mt-3 text-3xl font-display font-semibold tracking-tight">
          A More Serious Way to Study AI
        </h2>

        <p class="mt-6 leading-relaxed text-muted">
          Learning is supposed to be hard.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          Most online education is built for convenience: fast, engaging, easy to consume. That may feel productive, but it rarely produces real understanding.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          Netomia is for people who want more than content. It’s built for serious learners who want depth, challenge, and the kind of progress that only comes from sustained effort.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          We’re creating an immersive environment for studying AI deeply — moving beyond tutorials, tools, and surface-level familiarity toward real expertise.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          We don’t hold your hand — we give you the structure and environment to do the hard work.
        </p>
      </div>
    </section>


    <!-- PRODUCT -->
    <section id="product" class="border-b">
      <div class="container-copy section-padding">
        <div class="text-xs uppercase tracking-widest text-muted">
          First product
        </div>

        <h2 class="mt-3 text-3xl font-display font-semibold tracking-tight">
          The 20-Hour LLM Challenge
        </h2>

        <p class="mt-6 leading-relaxed text-muted">
          You can become competent in any skill with 20 focused hours — but most people take years to start the first.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          We created a challenge to get up to speed with modern LLM development in 20 hours.
          Surprised by the results, we decided to share it with others. Completely for free.
        </p>

        <p class="mt-4 leading-relaxed text-muted">
          It’s structured, self-directed, and deliberately demanding — with just enough guidance to keep you moving.
          You’ll read, derive, implement, and reason from first principles, then finish with a final challenge that tests understanding — not memorized terminology.
        </p>

        <ul class="mt-4 list-disc pl-5 space-y-1 text-muted">
          <li>Trace a transformer end-to-end, from text to logits</li>
          <li>Explain attention, positional information, normalization, and feed-forward blocks</li>
          <li>Design a basic training pipeline</li>
          <li>Reason about prompting vs fine-tuning vs LoRA</li>
          <li>Think in terms of compute, memory, latency, and deployment</li>
        </ul>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/challenge/start"
            class="button-pill border-border text-text"
          >
            Start the challenge
          </NuxtLink>
        </div>
      </div>
    </section>


    <!-- CTA -->
    <section class="section-padding">
      <div class="container-page">
        <div class="border border-border rounded-xl px-8 py-10 bg-surface">
          
          <div class="lg:flex lg:items-end lg:justify-between">
            <div>
              <div class="text-xs uppercase tracking-widest text-muted">
                Join Netomia Early
              </div>

              <h2 class="mt-3 text-3xl font-display font-semibold tracking-tight">
                Be part of what comes next
              </h2>

              <p class="mt-4 text-muted">
                Netomia is meant to grow into a platform of deep-study experiences across AI, for people who want to commit to the field seriously.
                The LLM Challenge is the first proof of the format. Future tracks will extend the same ethos into adjacent areas that deserve serious attention.
              </p>

              <p class="mt-2 text-muted">
                Join the waitlist to hear about updates, releases, and early access.
              </p>
            </div>

            <div class="mt-6 lg:mt-0">
              <a href="/waitlist" class="button-pill border-border text-text">
                Join the waitlist
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>
