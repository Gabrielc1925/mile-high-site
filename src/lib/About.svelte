<script>
  import { onMount } from 'svelte';
  let el;
  let visible = false;
  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { visible = true; obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<section id="about" class="about" bind:this={el} class:visible>
  <div class="grain"></div>

  <div class="inner">
    <div class="left">
      <div class="label">Our Story</div>
      <h2>Mediterranean <br>Flavors at<br><em>Mile High</em></h2>
      <p>
        Nestled in Aurora, Colorado, Mile High Pizza &amp; Grill brings together the vibrant traditions
        of the Mediterranean — from slow-fire shawarma and hand-rolled grape leaves to fresh-from-scratch
        pizza piled high with authentic toppings.
      </p>
      <p>
        Every dish is crafted with care, using time-honored recipes and quality ingredients. Whether
        you're craving a wood-fired calzone, a tender lamb shank, or our signature Mile High Shawarma
        Sandwich, you'll taste the difference.
      </p>
      <div class="stats">
        <div class="stat"><strong>7</strong><span>Days a Week</span></div>
        <div class="stat"><strong>11am</strong><span>Opens Daily</span></div>
        <div class="stat"><strong>50+</strong><span>Menu Items</span></div>
      </div>
    </div>

    <div class="right">
      <div class="card-grid">
        <div class="card card-1">
          <div class="icon">🍕</div>
          <h4>Fresh Pizza</h4>
          <p>House-made dough, your choice of toppings. From classic cheese to our Gyro Lamb specialty.</p>
        </div>
        <div class="card card-2">
          <div class="icon">🥩</div>
          <h4>Fire-Grilled</h4>
          <p>Kabobs, shawarma, and lamb chops grilled to perfection with Mediterranean spices.</p>
        </div>
        <div class="card card-3">
          <div class="icon">🥙</div>
          <h4>Sandwiches</h4>
          <p>Shawarma, Gyro, Kafta Kabob — wrapped in pita or tortilla with housemade sauces.</p>
        </div>
        <div class="card card-4">
          <div class="icon">🍯</div>
          <h4>Desserts</h4>
          <p>Finish sweet with our signature Baklava or the syrup-soaked Konafa.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    padding: 6rem 3rem;
    background: var(--ember);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .about.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .grain {
    position: absolute; inset: 0;
    opacity: 0.03;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .label {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    color: var(--cream);
    margin-bottom: 1.5rem;
  }
  h2 em {
    font-style: italic;
    color: var(--amber);
  }

  .left p {
    color: var(--muted);
    margin-bottom: 1rem;
    font-size: 0.98rem;
    max-width: 480px;
  }

  .stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
  }
  .stat strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--amber);
    line-height: 1;
  }
  .stat span {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .card {
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.5rem;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
  }
  .card:hover {
    background: rgba(201,146,42,0.07);
    border-color: rgba(201,146,42,0.4);
    transform: translateY(-3px);
  }
  .card .icon {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    filter: drop-shadow(0 0 6px rgba(201,146,42,0.4));
  }
  .card h4 {
    font-size: 1.05rem;
    color: var(--cream);
    margin-bottom: 0.5rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
  }
  .card p {
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.55;
  }

  @media (max-width: 900px) {
    .inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .about { padding: 4rem 1.5rem; }
  }
</style>
