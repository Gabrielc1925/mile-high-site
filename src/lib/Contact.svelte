<script>
  import { onMount } from 'svelte';
  let el;
  let visible = false;

  onMount(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { visible = true; obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  });
</script>

<section id="contact" class="contact" bind:this={el} class:visible>
  <div class="grain"></div>

  <div class="inner">
    <div class="left">
      <div class="label">Find Us</div>
      <h2>Come Visit <em>In Person</em></h2>
      <p>We'd love to serve you at our Aurora location. Walk-ins welcome — no reservations needed.</p>

      <div class="info-list">
        <div class="info-item">
          <div class="info-icon">📍</div>
          <div>
            <strong>Address</strong>
            <span>1010 S Peoria St<br>Aurora, CO 80012</span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📞</div>
          <div>
            <strong>Phone</strong>
            <a href="tel:+13036008818">(303) 600-8818</a>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🕐</div>
          <div>
            <strong>Hours</strong>
            <span>Open 7 Days a Week<br>11:00 AM – 10:00 PM</span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🚗</div>
          <div>
            <strong>Services</strong>
            <span>Pick-Up · Delivery · Catering</span>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">💳</div>
          <div>
            <strong>Payment</strong>
            <span>All Major Credit Cards & Cash</span>
          </div>
        </div>
      </div>

      <a
        href="https://maps.google.com/?q=1010+S+Peoria+St+Aurora+CO+80012"
        target="_blank"
        rel="noopener noreferrer"
        class="directions-btn"
      >Get Directions →</a>
    </div>

    <div class="right">
      <div class="map-container">
        <iframe
          title="Mile High Pizza & Grill location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.8!2d-104.84!3d39.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c66e8cf1e1f41%3A0x9d59b6234af9cd0c!2s1010%20S%20Peoria%20St%2C%20Aurora%2C%20CO%2080012!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="map-overlay">
          <div class="map-pin">
            <strong>Mile High Pizza & Grill</strong>
            <span>1010 S Peoria St, Aurora</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 6rem 3rem;
    background: var(--coal);
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .contact.visible { opacity: 1; transform: translateY(0); }

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
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: start;
    position: relative;
    z-index: 1;
  }

  .label {
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    color: var(--cream);
    margin-bottom: 1rem;
  }
  h2 em { color: var(--amber); font-style: italic; }
  .left > p {
    color: var(--muted);
    margin-bottom: 2rem;
    font-size: 0.97rem;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .info-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .info-icon {
    font-size: 1.1rem;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 6px;
    background: rgba(201,146,42,0.1);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .info-item div {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  .info-item strong {
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gold);
  }
  .info-item span,
  .info-item a {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.5;
  }
  .info-item a:hover { color: var(--amber); }

  .directions-btn {
    display: inline-block;
    padding: 0.85rem 2rem;
    border: 1px solid var(--border);
    color: var(--cream);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .directions-btn:hover {
    background: rgba(201,146,42,0.08);
    border-color: var(--gold);
    color: var(--amber);
  }

  .map-container {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
    aspect-ratio: 4/3;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: brightness(0.85) saturate(0.7);
  }
  .map-overlay {
    position: absolute;
    bottom: 1rem; left: 1rem;
    background: rgba(13,10,7,0.92);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.6rem 0.9rem;
    backdrop-filter: blur(8px);
  }
  .map-pin {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .map-pin strong {
    font-size: 0.85rem;
    color: var(--cream);
  }
  .map-pin span {
    font-size: 0.72rem;
    color: var(--muted);
  }

  @media (max-width: 900px) {
    .inner { grid-template-columns: 1fr; gap: 2.5rem; }
    .contact { padding: 4rem 1.25rem; }
  }
</style>
