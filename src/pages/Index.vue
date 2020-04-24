<style>
  .parallax-container {
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 1500px;
    margin: auto;
    overflow: hidden;
  }
  .parallax-foreground,
  .parallax-background,
  .parallax-midground {
    position: absolute;
  }
  .top-lines { left: 5%; top: -8vw; width: 35%; }
  .bottom-lines { left: 10%; bottom: 6vw; width: 35%; }
  .right-lines { right: 0; bottom: 75%; width: 10%; }
  .left-cloud { left: 1rem; bottom: -1%; width: 35%; }
  .planet { right: 20%; bottom: 3vw; width: 25%; }
  .right-cloud { right: 1rem; bottom: -1%; width: 50%; }

  @media (orientation: portrait) {
    .parallax-container {
      max-height: 140vw;
    }
    .left-cloud,
    .bottom-lines,
    .top-lines,
    .right-lines {
      display: none !important;
    }
    .right-cloud { width: 90%; right: 5%; left: 5%; }
    .planet { width: 40%; right: 35%; bottom: 5vw;}
  }

  .contact-form {
    margin: auto;
    width: 100%;
    max-width: 600px;
    margin-bottom: var(--space);
  }
  @media (orientation: landscape) {
    .contact-form{
      padding: calc(var(--space) * 2);
      margin-bottom: calc(var(--space) * -6);
    }
  }

  @keyframes float-bob {
    0% { transform: translate(0, 0px) rotate(180deg); }
    50% { transform: translate(0, 10px) rotate(180deg); }
    100% { transform: translate(0, 0px) rotate(180deg); }
  }
</style>


<template>
<div id="app">
  <header id="top-header">
    <TopNav/>
  </header>

  <main class="main">
    <div style="background-image: linear-gradient(var(--color-gray-200), var(--color-gray-100));">
    <section id="hero" class="parallax-container">
      <img src="/cdn/assets/hero/lines-top-dark.png" alt="" class="parallax-background top-lines" v-if="this.$store.state.darkTheme">
      <img src="/cdn/assets/hero/lines-top.png" alt="" class="parallax-background top-lines" v-else>

      <img src="/cdn/assets/hero/lines-bottom-dark.png" alt="" class="parallax-background bottom-lines" v-if="this.$store.state.darkTheme">
      <img src="/cdn/assets/hero/lines-bottom.png" alt="" class="parallax-background bottom-lines" v-else>

      <img src="/cdn/assets/hero/lines-right-dark.png" alt="" class="parallax-background right-lines" v-if="this.$store.state.darkTheme">
      <img src="/cdn/assets/hero/lines-right.png" alt="" class="parallax-background right-lines" v-else>

      <img src="/cdn/assets/hero/planet.png" alt="" class="parallax-midground planet">

      <img src="/cdn/assets/hero/left-cloud-dark.png" alt="" class="parallax-foreground left-cloud" v-if="this.$store.state.darkTheme">
      <img src="/cdn/assets/hero/left-cloud.png" alt="" class="parallax-foreground left-cloud" v-else>

      <img src="/cdn/assets/hero/right-cloud-dark.png" alt="" class="parallax-foreground right-cloud" v-if="this.$store.state.darkTheme">
      <img src="/cdn/assets/hero/right-cloud.png" alt="" class="parallax-foreground right-cloud" v-else>

      <div class="content-box" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center;">
        <div style="width: 100%; margin-bottom: 10vw;">
          <h1 style="text-align: center;">Matthew McAdams</h1>
          <p style="text-align: center;">Designer, web developer, and creative problem solver.</p>
          <br>
          <p style="text-align: center;">SCROLL<br><i class="icon-arrow_up txt-h2" aria-label="down arrow" style=" transform: translate(0px, 0px) rotate(180deg); display: block; margin-top: 0; animation-name: float-bob; animation-duration: 2s; animation-iteration-count: infinite"></i></p>
        </div>
      </div>
    </section>
    </div>

    <section id="about" class="my-4">
      <div class="grid container-wide" style="--grid-gap: calc(var(--fluid-4) * 2); align-items: center; margin: var(--space-fluid) auto;">
        <div>
          <h2>Nice to meet you</h2>
          <p>I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p class="txt-small">In the spring of 2020, I got my bachelor of fine arts from the <a href="https://www.uab.edu" target="_blank" rel="noopener">University of Alabama at Birmingham</a> while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="button" href="/cdn/McAdams-CV-Jan-2020.pdf" target="_blank" rel="noopener">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="/cdn/assets/640/website-portrait-dark.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." v-if="this.$store.state.darkTheme" style="max-width: 500px width: 100%;">
          <img src="/cdn/assets/640/website-portrait.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." style="max-width: 500px width: 100%;" v-else>
        </div>
      </div>
    </section>

    <section class="bg-gray-200 my-2-fluid py-2-fluid">
      <div class="grid-landscape container-wide" style="--grid-gap: calc(var(--space) * 4);">
        <div style="max-width: 500px; margin: auto;" class="mb-2">
          <img src="/cdn/assets/640/art-logic-dark.png" alt="Illustration of a sketchbook and desktop computer displaying code" v-if="this.$store.state.darkTheme">
          <img src="/cdn/assets/640/art-logic.png" alt="Illustration of a sketchbook and desktop computer displaying code" v-else>
        </div>
        <div>
          <h2>Art &amp; Logic</h2>
          <p>Working on meaningful projects and being able to create something beautiful and bring it to life with code is my favorite aspect of my work as a creative.</p>
          <p class="txt-small">Learning is how I stay inspired and is what gives me the motivation to push forward. The worlds of art and technology are constantly changing, and I love learning and being able to work in multiple contexts, more fluidly across traditional job descriptions.</p>
        </div>
      </div>
      <div class="grid container-wide mt-2" style="grid-column-gap: calc(var(--space) * 4);">
        <div>
          <h3 class="txt-h4">Thoughtful design</h3>
          <p>I’m interested in doing research and creating a design that is not only visually compelling, but is meaningful.</p>
        </div>
        <div>
          <h3 class="txt-h4">Quality code</h3>
          <p>One of my goals as a developer is to write performant, clearly organized, legible, and well documented code.</p>
        </div>
        <div>
          <h3 class="txt-h4">Great experiences</h3>
          <p>I’m passionate about accessibility and user experience and believe in inclusive products.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <h2 class="txt-center">Say Hello</h2>
        <p class="txt-center">Feel free to reach out to me for any questions, concerns, or comments. I'm also open to full-time opportunities as well as freelance work.</p>
      </div>

      <div class="container-wide">
        <div class="grid-landscape" style="--grid-gap: calc(var(--space) * 4);">
          <form
            class="bg-gray-100 rounded-large contact-form"
            style="z-index: 5;"
            method="POST"
            data-netlify="true"
            name="contact"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label for="name" class="label" >Name</label>
            <input id="name" type="text" name="name" v-model="formData.name" />

            <label for="email">Email</label>
            <input id="email" type="email" name="email" v-model="formData.email" />

            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="formData.message"></textarea>

            <p class="txt-right" style="margin-bottom: 0;"><button type="submit">Submit</button></p>
          </form>
          <div style="align-self: end;">
            <img src="/cdn/assets/640/city-dark.png" alt="" style="margin-bottom: 0;"  v-if="this.$store.state.darkTheme">
            <img src="/cdn/assets/640/city.png" alt="" style="margin: auto; margin-bottom: 0; max-width: 500px; width: 100%;" v-else>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-200 py-2">
    <div class="container-wide grid-landscape">
      <div></div>
      <FooterInfo/>
    </div>
  </footer>
</div>
</template>


<script>
import respImg from '~/components/Image.vue'
import FooterInfo from '~/components/Footer.vue'
import TopNav from '~/components/NavigationBar.vue'

export default {
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Matt McAdams is an award winning web designer and developer working in Alabama.' }
    ],
    bodyAttrs: {
      class: 'home-page'
    }
  },
  components: {
    FooterInfo,
    TopNav,
    respImg
  },
  data() {
    return { formData: {} }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    }
  },
  mounted() {
    window.simpleParallax = require('simple-parallax-js')

    let parallaxFront = document.getElementsByClassName('parallax-foreground')
    new simpleParallax(parallaxFront, {
      overflow: true,
      orientation: 'down',
      scale: 1
    })
    let parallaxMid = document.getElementsByClassName('parallax-midground')
    new simpleParallax(parallaxMid, {
      overflow: true,
      orientation: 'down',
      scale: 1.3
    })
    let parallaxBack = document.getElementsByClassName('parallax-background')
    new simpleParallax(parallaxBack, {
      overflow: true,
      orientation: 'down',
      scale: 2
    })
  }
}
</script>
