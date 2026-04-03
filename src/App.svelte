<script>
  import { onMount } from 'svelte';
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  import MenuSection from './lib/MenuSection.svelte';
  import Delivery from './lib/Delivery.svelte';
  import Contact from './lib/Contact.svelte';
  import Footer from './lib/Footer.svelte';

  let visible = false;
  onMount(() => {
    setTimeout(() => visible = true, 50);
  });
</script>

<div class="app" class:visible>
  <Nav />
  <Hero />
  <About />
  <MenuSection />
  <Delivery />
  <Contact />
  <Footer />
</div>

<style>
  :global(*) { margin: 0; padding: 0; box-sizing: border-box; }
  :global(:root) {
    --coal:   #0d0a07;
    --ember:  #18110a;
    --gold:   #c9922a;
    --amber:  #e4b23a;
    --cream:  #f5ede0;
    --parchment: #e8d8c0;
    --muted:  #9e8a72;
    --red:    #7c1f1f;
    --border: rgba(201,146,42,0.22);
    --shadow: rgba(0,0,0,0.6);
  }
  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    background: var(--coal);
    color: var(--cream);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
    line-height: 1.6;
  }
  :global(h1,h2,h3,h4,h5) {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    line-height: 1.15;
  }
  :global(a) { color: inherit; text-decoration: none; }
  :global(img) { display: block; max-width: 100%; }
  :global(section) { position: relative; }

  .app {
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .app.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
