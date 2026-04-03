<script>
  import { onMount } from 'svelte';
  import { menuData } from './menuData.js';

  let el;
  let visible = false;
  let activeTab = 'pizza';

  const tabs = [
    { key: 'pizza',       label: '🍕 Pizza'       },
    { key: 'calzones',    label: '🫓 Calzones'     },
    { key: 'grill',       label: '🔥 Grill'        },
    { key: 'sandwiches',  label: '🥙 Sandwiches'   },
    { key: 'appetizers',  label: '🌿 Appetizers'   },
    { key: 'sides',       label: '🥗 Sides'        },
  ];

  $: section = menuData[activeTab];

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { visible = true; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<section id="menu" class="menu-section" bind:this={el} class:visible>
  <div class="grain"></div>

  <div class="inner">
    <div class="header">
      <div class="label">The Menu</div>
      <h2>Every Dish, <em>Crafted</em><br>with Intention</h2>
      <p>Mediterranean tradition meets Colorado comfort. From fire-kissed kabobs to hand-tossed pizza.</p>
    </div>

    <div class="tabs" role="tablist">
      {#each tabs as t}
        <button
          role="tab"
          aria-selected={activeTab === t.key}
          class:active={activeTab === t.key}
          on:click={() => activeTab = t.key}
        >{t.label}</button>
      {/each}
    </div>

    {#key activeTab}
      <div class="section-header">
        <h3>{section.icon} {section.title}</h3>
        <p>{section.description}</p>
      </div>

      <!-- Pizza has size pricing -->
      {#if activeTab === 'pizza'}
        <div class="size-note">{section.sizeNote}</div>
        <div class="grid pizza-grid">
          {#each section.items as item}
            <div class="card">
              {#if item.badge}
                <span class="badge" class:specialty={item.badge.startsWith('★')}>{item.badge}</span>
              {/if}
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div class="price-row">
                <span class="price-tag">${item.price.sm}</span>
                <span class="size-sep">·</span>
                <span class="price-tag">${item.price.lg}</span>
                <span class="size-sep">·</span>
                <span class="price-tag">${item.price.xl}</span>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="grid">
          {#each section.items as item}
            <div class="card">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div class="price-single">{item.price}</div>
            </div>
          {/each}
        </div>
      {/if}
    {/key}
  </div>
</section>

<style>
  .menu-section {
    padding: 6rem 3rem;
    background: var(--coal);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .menu-section.visible {
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
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 3.5rem;
  }
  .label {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--cream);
    margin-bottom: 1rem;
  }
  h2 em {
    color: var(--amber);
    font-style: italic;
  }
  .header p {
    color: var(--muted);
    max-width: 520px;
    margin: 0 auto;
    font-size: 0.97rem;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
  }
  .tabs button {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    color: var(--muted);
    padding: 0.55rem 1.2rem;
    border-radius: 100px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.03em;
  }
  .tabs button:hover {
    border-color: rgba(201,146,42,0.4);
    color: var(--cream);
  }
  .tabs button.active {
    background: linear-gradient(135deg, var(--gold), var(--amber));
    border-color: var(--amber);
    color: var(--coal);
    font-weight: 700;
  }

  .section-header {
    margin-bottom: 1.5rem;
    animation: fadeIn 0.4s ease;
  }
  .section-header h3 {
    font-size: 1.6rem;
    color: var(--cream);
    margin-bottom: 0.3rem;
  }
  .section-header p {
    font-size: 0.85rem;
    color: var(--muted);
  }

  .size-note {
    font-size: 0.75rem;
    color: var(--gold);
    letter-spacing: 0.06em;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    display: inline-block;
    background: rgba(201,146,42,0.06);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    animation: fadeIn 0.4s ease;
  }
  .pizza-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .card {
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 1.25rem 1.4rem;
    position: relative;
    transition: background 0.25s, border-color 0.25s, transform 0.25s;
  }
  .card:hover {
    background: rgba(201,146,42,0.06);
    border-color: rgba(201,146,42,0.35);
    transform: translateY(-2px);
  }

  .badge {
    position: absolute;
    top: 0.75rem; right: 0.75rem;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border-radius: 100px;
    border: 1px solid rgba(201,146,42,0.3);
    color: var(--gold);
    background: rgba(201,146,42,0.08);
  }
  .badge.specialty {
    border-color: var(--amber);
    color: var(--amber);
    background: rgba(228,178,58,0.12);
  }

  .card h4 {
    font-size: 1.1rem;
    color: var(--cream);
    margin-bottom: 0.4rem;
    padding-right: 3.5rem;
  }
  .card p {
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  .price-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: auto;
  }
  .price-tag {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    color: var(--amber);
    font-weight: 600;
  }
  .size-sep {
    color: var(--border);
  }

  .price-single {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    color: var(--amber);
    font-weight: 600;
    margin-top: auto;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .menu-section { padding: 4rem 1.25rem; }
    .grid { grid-template-columns: 1fr; }
  }
</style>
