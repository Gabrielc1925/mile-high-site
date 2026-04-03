<script>
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="grain"></div>
  <div class="inner">
    <div class="brand">
      <span class="flame">🔥</span>
      <div>
        <strong>Mile High Pizza & Grill</strong>
        <span>Aurora, Colorado</span>
      </div>
    </div>

    <nav>
      <a href="#top">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#order">Order</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="contact-line">
      <a href="tel:+13036008818">(303) 600-8818</a>
      <span>·</span>
      <a href="https://maps.google.com/?q=1010+S+Peoria+St+Aurora+CO+80012" target="_blank" rel="noopener noreferrer">
        1010 S Peoria St, Aurora CO 80012
      </a>
    </div>
  </div>

  <div class="bottom">
    <span>© {year} Mile High Pizza & Grill · All rights reserved.</span>
    <span>Open 7 Days · 11 AM – 10 PM · Pick-Up · Delivery · Catering</span>
  </div>
</footer>

<style>
  footer {
    background: #080604;
    border-top: 1px solid var(--border);
    padding: 3rem 3rem 2rem;
    position: relative;
    overflow: hidden;
  }
  .grain {
    position: absolute; inset: 0;
    opacity: 0.035;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--border);
    position: relative;
    z-index: 1;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .flame {
    font-size: 1.6rem;
    filter: drop-shadow(0 0 6px rgba(201,146,42,0.5));
  }
  .brand div {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .brand strong {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    color: var(--cream);
  }
  .brand span {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  nav {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  nav a {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
  }
  nav a:hover { color: var(--amber); }

  .contact-line {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .contact-line a {
    font-size: 0.82rem;
    color: var(--muted);
    transition: color 0.2s;
  }
  .contact-line a:hover { color: var(--gold); }
  .contact-line span { color: var(--border); }

  .bottom {
    max-width: 1200px;
    margin: 1.5rem auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.72rem;
    color: rgba(158,138,114,0.5);
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    footer { padding: 2.5rem 1.25rem 1.5rem; }
    .inner { flex-direction: column; align-items: flex-start; }
    .bottom { flex-direction: column; gap: 0.3rem; }
  }
</style>
