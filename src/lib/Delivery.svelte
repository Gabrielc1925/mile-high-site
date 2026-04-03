<script>
  import { onMount } from 'svelte';
  let el;
  let visible = false;

  const platforms = [
    {
      name: 'Grubhub',
      logo: 'GH',
      color: '#f63440',
      bg: 'rgba(246,52,64,0.08)',
      border: 'rgba(246,52,64,0.25)',
      url: 'https://www.grubhub.com/restaurant/mile-high-pizza-and-grill-1010-s-peoria-st-aurora/8074288',
      desc: 'Order on Grubhub'
    },
    {
      name: 'DoorDash',
      logo: 'DD',
      color: '#ff3008',
      bg: 'rgba(255,48,8,0.08)',
      border: 'rgba(255,48,8,0.25)',
      url: 'https://www.doordash.com/en-US/store/mile-high-pizza-and-grill-aurora-28003167/',
      desc: 'Order on DoorDash'
    },
    {
      name: 'Uber Eats',
      logo: 'UE',
      color: '#06c167',
      bg: 'rgba(6,193,103,0.08)',
      border: 'rgba(6,193,103,0.25)',
      url: 'https://www.ubereats.com/store/mile-high-pizza-and-grill-amun-inc-aurora/3EDv4A8gSbihFe93iaB8Kw',
      desc: 'Order on Uber Eats'
    },
    {
      name: 'Postmates',
      logo: 'PM',
      color: '#00ccbe',
      bg: 'rgba(0,204,190,0.08)',
      border: 'rgba(0,204,190,0.25)',
      url: 'https://postmates.com/store/mile-high-pizza-and-grill-amun-inc-aurora/3EDv4A8gSbihFe93iaB8Kw',
      desc: 'Order on Postmates'
    },
    {
      name: 'Slice',
      logo: 'SL',
      color: '#e85d30',
      bg: 'rgba(232,93,48,0.08)',
      border: 'rgba(232,93,48,0.25)',
      url: 'https://slicelife.com/restaurants/co/aurora/80012/mile-high-pizza-grill-1010-s-peoria-st-aurora/menu',
      desc: 'Order on Slice'
    },
    {
      name: 'Call Us',
      logo: '📞',
      color: '#c9922a',
      bg: 'rgba(201,146,42,0.08)',
      border: 'rgba(201,146,42,0.3)',
      url: 'tel:+13036008818',
      desc: '(303) 600-8818',
      isPhone: true
    },
  ];

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { visible = true; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<section id="order" class="delivery" bind:this={el} class:visible>
  <div class="bg-accent"></div>
  <div class="grain"></div>

  <div class="inner">
    <div class="header">
      <div class="label">Delivery & Pickup</div>
      <h2>Order Your Way,<br><em>Delivered to You</em></h2>
      <p>Pick-up, delivery, or catering — we make it easy.<br>Order online through your preferred platform.</p>
    </div>

    <div class="platforms">
      {#each platforms as p, i}
        <a
          href={p.url}
          target={p.isPhone ? '_self' : '_blank'}
          rel="noopener noreferrer"
          class="platform-card"
          style="
            --c: {p.color};
            --bg: {p.bg};
            --br: {p.border};
            animation-delay: {i * 80}ms;
          "
        >
          <div class="plat-logo">{p.logo}</div>
          <div class="plat-info">
            <strong>{p.name}</strong>
            <span>{p.desc}</span>
          </div>
          <div class="arrow">→</div>
        </a>
      {/each}
    </div>

    <div class="hours-banner">
      <div class="hour-item">
        <span class="day">Every Day</span>
        <span class="time">11:00 AM – 10:00 PM</span>
      </div>
      <div class="divider"></div>
      <div class="hour-item">
        <span class="day">Pick-Up & Delivery</span>
        <span class="time">Available Daily</span>
      </div>
      <div class="divider"></div>
      <div class="hour-item">
        <span class="day">Catering</span>
        <span class="time">Call to Arrange</span>
      </div>
    </div>
  </div>
</section>

<style>
  .delivery {
    padding: 6rem 3rem;
    background: var(--ember);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .delivery.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .bg-accent {
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(201,146,42,0.08) 0%, transparent 65%);
    pointer-events: none;
  }
  .grain {
    position: absolute; inset: 0;
    opacity: 0.03;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .inner {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
  }
  .label {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    color: var(--cream);
    margin-bottom: 1rem;
  }
  h2 em { color: var(--amber); font-style: italic; }
  .header p {
    color: var(--muted);
    font-size: 0.97rem;
    line-height: 1.7;
  }

  .platforms {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 0.85rem;
    margin-bottom: 2.5rem;
  }

  .platform-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.3rem;
    background: var(--bg);
    border: 1px solid var(--br);
    border-radius: 6px;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    animation: slideUp 0.5s ease both;
  }
  .platform-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    border-color: var(--c);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .plat-logo {
    width: 44px; height: 44px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 800;
    color: var(--c);
    letter-spacing: -0.05em;
    flex-shrink: 0;
  }

  .plat-info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .plat-info strong {
    font-size: 0.95rem;
    color: var(--cream);
    font-weight: 600;
  }
  .plat-info span {
    font-size: 0.75rem;
    color: var(--muted);
    margin-top: 1px;
  }

  .arrow {
    color: var(--c);
    font-size: 1rem;
    opacity: 0.6;
    transition: opacity 0.2s, transform 0.2s;
  }
  .platform-card:hover .arrow {
    opacity: 1;
    transform: translateX(3px);
  }

  .hours-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem 2rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: rgba(255,255,255,0.02);
    flex-wrap: wrap;
  }
  .hour-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
  .day {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
  }
  .time {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem;
    color: var(--cream);
    font-weight: 600;
  }
  .divider {
    width: 1px; height: 40px;
    background: var(--border);
  }

  @media (max-width: 768px) {
    .delivery { padding: 4rem 1.25rem; }
    .platforms { grid-template-columns: 1fr; }
    .divider { width: 60px; height: 1px; }
    .hours-banner { flex-direction: column; gap: 1.25rem; }
  }
</style>
