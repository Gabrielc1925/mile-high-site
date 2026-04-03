<script>
  import { onMount } from 'svelte';
  let mounted = false;
  onMount(() => setTimeout(() => mounted = true, 100));
</script>

<section id="top" class="hero">
  <!-- Layered background -->
  <div class="bg-base"></div>
  <div class="bg-pattern"></div>
  <div class="bg-vignette"></div>
  <div class="grain"></div>

  <!-- Ember particles -->
  <div class="particles" aria-hidden="true">
    {#each Array(18) as _, i}
      <div class="particle" style="
        --x: {Math.random()*100}%;
        --delay: {Math.random()*5}s;
        --dur: {3 + Math.random()*4}s;
        --size: {2 + Math.random()*4}px;
        --drift: {(Math.random()-0.5)*80}px;
      "></div>
    {/each}
  </div>

  <div class="content" class:mounted>
    <div class="eyebrow">Aurora, Colorado · Est. 2022</div>

    <h1>
      <span class="line1">Mile High</span>
      <span class="line2">Pizza<em>&</em>Grill</span>
    </h1>

    <p class="tagline">
      Where the Mediterranean meets Colorado —<br>
      handcrafted pizza, slow-fire kabobs &amp; shawarma
    </p>

    <div class="cta-group">
      <a href="#order" class="btn-primary">Order Delivery</a>
      <a href="#menu" class="btn-ghost">View Menu</a>
    </div>

    <div class="badges">
      <span>🍕 Fresh-Made Pizza</span>
      <span>🥙 Authentic Shawarma</span>
      <span>🔥 Fire-Grilled Kabobs</span>
    </div>
  </div>

  <div class="scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 7rem 2rem 4rem;
  }

  .bg-base {
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 30% 40%, rgba(124,31,31,0.55) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 70% 60%, rgba(201,146,42,0.15) 0%, transparent 50%),
      linear-gradient(170deg, #1a0d05 0%, #0d0a07 50%, #0a0d0f 100%);
  }
  .bg-pattern {
    position: absolute; inset: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 35px,
        rgba(201,146,42,0.025) 35px,
        rgba(201,146,42,0.025) 36px
      );
  }
  .bg-vignette {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%);
  }
  .grain {
    position: absolute; inset: -50%;
    width: 200%; height: 200%;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  /* Particles */
  .particles {
    position: absolute; inset: 0;
    pointer-events: none;
  }
  .particle {
    position: absolute;
    bottom: 0;
    left: var(--x);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle, var(--amber) 0%, var(--gold) 50%, transparent 100%);
    border-radius: 50%;
    animation: rise var(--dur) var(--delay) ease-in infinite;
  }
  @keyframes rise {
    0%   { transform: translateY(0) translateX(0); opacity: 0; }
    10%  { opacity: 0.9; }
    80%  { opacity: 0.4; }
    100% { transform: translateY(-80vh) translateX(var(--drift)); opacity: 0; }
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 820px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
  }
  .content.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.5rem;
    opacity: 0.85;
  }

  h1 {
    font-size: clamp(3.5rem, 10vw, 8rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1em;
  }
  .line1 {
    color: var(--cream);
    text-shadow: 0 0 60px rgba(201,146,42,0.3);
  }
  .line2 {
    color: var(--amber);
    text-shadow: 0 0 80px rgba(228,178,58,0.5);
  }
  .line2 em {
    font-style: normal;
    color: var(--cream);
    opacity: 0.7;
    font-size: 0.7em;
    margin: 0 0.2em;
  }

  .tagline {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: var(--muted);
    margin-bottom: 2.5rem;
    line-height: 1.7;
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
  }

  .cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.9rem 2.4rem;
    background: linear-gradient(135deg, var(--gold) 0%, var(--amber) 100%);
    color: var(--coal);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border-radius: 2px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px rgba(201,146,42,0.4);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(201,146,42,0.6);
  }

  .btn-ghost {
    display: inline-block;
    padding: 0.9rem 2.4rem;
    border: 1px solid var(--border);
    color: var(--cream);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border-radius: 2px;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }
  .btn-ghost:hover {
    border-color: var(--gold);
    color: var(--amber);
    background: rgba(201,146,42,0.06);
  }

  .badges {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 0.78rem;
    color: var(--muted);
    letter-spacing: 0.05em;
  }
  .badges span {
    padding: 0.35rem 0.9rem;
    border: 1px solid rgba(201,146,42,0.15);
    border-radius: 100px;
    transition: border-color 0.2s, color 0.2s;
  }
  .badges span:hover {
    border-color: var(--gold);
    color: var(--amber);
  }

  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    z-index: 2;
  }
  .scroll-hint span {
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    opacity: 0.5;
  }
  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: pulse-line 2s ease-in-out infinite;
  }
  @keyframes pulse-line {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 0.8; transform: scaleY(1.1); }
  }
</style>
