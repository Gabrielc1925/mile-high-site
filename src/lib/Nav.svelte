<script>
  import { onMount } from 'svelte';
  let scrolled = false;
  let menuOpen = false;

  const links = [
    { href: '#about',    label: 'About'      },
    { href: '#pizza',    label: 'Pizza'       },
    { href: '#grill',    label: 'Grill'       },
    { href: '#menu',     label: 'Full Menu'   },
    { href: '#order',    label: 'Order Now'   },
    { href: '#contact',  label: 'Contact'     },
  ];

  onMount(() => {
    const onScroll = () => scrolled = window.scrollY > 60;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class:scrolled class:open={menuOpen}>
  <a href="#top" class="brand">
    <span class="flame">🔥</span>
    <span class="name">Mile High<em>Pizza & Grill</em></span>
  </a>

  <ul class="links">
    {#each links as l}
      <li><a href={l.href} on:click={() => menuOpen = false}>{l.label}</a></li>
    {/each}
  </ul>

  <button class="hamburger" aria-label="Menu" on:click={() => menuOpen = !menuOpen}>
    <span></span><span></span><span></span>
  </button>

  {#if menuOpen}
    <div class="mobile-menu">
      {#each links as l}
        <a href={l.href} on:click={() => menuOpen = false}>{l.label}</a>
      {/each}
    </div>
  {/if}
</nav>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 3rem;
    transition: background 0.35s ease, padding 0.35s ease, box-shadow 0.35s ease;
  }
  nav.scrolled {
    background: rgba(13,10,7,0.96);
    padding: 0.85rem 3rem;
    box-shadow: 0 2px 40px rgba(0,0,0,0.6);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--cream);
    letter-spacing: 0.02em;
  }
  .brand .name {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  .brand em {
    font-style: normal;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }
  .flame {
    font-size: 1.5rem;
    filter: drop-shadow(0 0 6px rgba(201,146,42,0.7));
    animation: flicker 2.5s ease-in-out infinite alternate;
  }
  @keyframes flicker {
    0%   { transform: scaleY(1) rotate(-2deg);   filter: drop-shadow(0 0 6px rgba(201,146,42,0.6)); }
    50%  { transform: scaleY(1.06) rotate(1deg);  filter: drop-shadow(0 0 10px rgba(228,178,58,0.9)); }
    100% { transform: scaleY(0.97) rotate(2deg);  filter: drop-shadow(0 0 8px rgba(201,146,42,0.7)); }
  }

  .links {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  .links a {
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
    position: relative;
    padding-bottom: 3px;
  }
  .links a::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0; height: 1px;
    background: var(--gold);
    transition: width 0.25s ease;
  }
  .links a:hover { color: var(--amber); }
  .links a:hover::after { width: 100%; }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }
  .hamburger span {
    display: block;
    width: 24px; height: 2px;
    background: var(--cream);
    transition: all 0.2s;
  }

  .mobile-menu {
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: rgba(13,10,7,0.98);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 1.5rem;
    gap: 1rem;
    backdrop-filter: blur(12px);
  }
  .mobile-menu a {
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: var(--amber); }

  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    nav.scrolled { padding: 0.75rem 1.5rem; }
    .links { display: none; }
    .hamburger { display: flex; }
  }
</style>
