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
</style>


<template>
<div id="app">
  <header id="top-header">
    <TopNav/>
  </header>

  <main class="main">
    <div style="background-image: linear-gradient(var(--color-gray-200), var(--color-gray-100));">
    <section id="hero" class="parallax-container">
      <img src="/images/assets/lines-top.png" alt="" class="parallax-background light-theme-only top-lines">
      <img src="/images/assets/lines-top-dark.png" alt="" class="parallax-background dark-theme-only top-lines">

      <img src="/images/assets/lines-bottom.png" alt="" class="parallax-background light-theme-only bottom-lines">
      <img src="/images/assets/lines-bottom-dark.png" alt="" class="parallax-background dark-theme-only bottom-lines">

      <img src="/images/assets/lines-right.png" alt="" class="parallax-background light-theme-only right-lines">
      <img src="/images/assets/lines-right-dark.png" alt="" class="parallax-background dark-theme-only right-lines">

      <img src="/images/assets/planet.png" alt="" class="parallax-midground planet">
      <img src="/images/assets/left-cloud.png" alt="" class="parallax-foreground left-cloud light-theme-only">
      <img src="/images/assets/left-cloud-dark.png" alt="" class="parallax-foreground left-cloud dark-theme-only">

      <img src="/images/assets/right-cloud.png" alt="" class="parallax-foreground right-cloud light-theme-only">
      <img src="/images/assets/right-cloud-dark.png" alt="" class="parallax-foreground right-cloud dark-theme-only">

      <div class="content-box" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center;">
        <div style="width: 100%; margin-bottom: 10vw;">
          <h1 style="text-align: center;">Matthew McAdams</h1>
          <p style="text-align: center;">Designer, web developer, and creative problem solver.</p>
          <br>
          <p style="text-align: center;">SCROLL<br><i class="icon-arrow_up txt-h2" aria-label="down arrow" style="transform: rotate(180deg); display: block; margin-top: 0;"></i></p>
        </div>
      </div>
    </section>
    </div>

    <section id="about" class="my-4">
      <div class="grid content-box-wide" style="--grid-gap: calc(var(--fluid-4) * 2); align-items: center; margin: var(--space-fluid) auto;">
        <div>
          <h2>Nice to meet you</h2>
          <p>I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p class="txt-small">In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="button" href="https://assets.mattmcadams.com/McAdams-CV-Jan-2020.pdf">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="/images/assets/website-portrait@2x.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." class="light-theme-only" style="max-width: 500px; margin: auto; width: 100%;">
          <img src="/images/assets/website-portrait-dark@2x.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." class="dark-theme-only">
        </div>
      </div>
    </section>

    <section class="bg-gray-200" style="margin: var(--space-fluid) 0; padding: var(--space-fluid) 0;">
      <div class="grid-landscape content-box-wide" style="--grid-gap: calc(var(--space) * 4);">
        <div style="max-width: 500px; margin: 0 auto calc(var(--space) * 2) auto;">
          <img src="/images/assets/art-logic@2x.png" alt="Illustration of a sketchbook and desktop computer displaying code" class="light-theme-only">
          <img src="/images/assets/art-logic-dark@2x.png" alt="Illustration of a sketchbook and desktop computer displaying code" class="dark-theme-only">
        </div>
        <div>
          <h2>Art &amp; Logic</h2>
          <p>Working on meaningful projects and being able to create something beautiful and bring it to life with code is my favorite aspect of my work as a creative.</p>
          <p class="txt-small">Learning is how I stay inspired and is what gives me the motivation to push forward. The world of art and the world of technology are constantly changing, and I believe we’re coming to a place where creatives are able to work in multiple contexts and work more fluidly across traditional job descriptions. Personally, I enjoy switching contexts between design, illustration, and development.</p>
        </div>
      </div>
      <div class="grid content-box-wide" style="grid-column-gap: calc(var(--space) * 4); margin-top: calc(var(--space) * 2);">
        <div>
          <h3 class="txt-h4">Thoughtful design</h3>
          <p>I’m interested in doing the research and creating a design that is not only visually compelling, but is meaningful as well.</p>
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
      <div class="content-box">
        <h2 class="txt-center">Say Hello</h2>
        <p class="txt-center">Feel free to reach out to me for any questions, concerns, or comments. I'm also open to full-time opportunities as well as freelance work. If you'd like to report a bug with my website, please check out its <a href="https://github.com/MattMcAdams/website" target="_blank">GitHub page</a> for more.</p>
      </div>

      <div class="content-box-wide">
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
            <input type="text" name="name" v-model="formData.name" />

            <label for="email">Email</label>
            <input type="email" name="email" v-model="formData.email" />

            <label for="message">Message</label>
            <textarea name="message" v-model="formData.message"></textarea>

            <p class="txt-right" style="margin-bottom: 0;"><button type="submit">Submit</button></p>
          </form>
          <div style="align-self: end;">
            <img src="/images/assets/city@2x.png" alt="" style="margin: auto; margin-bottom: 0; max-width: 500px; width: 100%;" class="light-theme-only">
            <img src="/images/assets/city-dark@2x.png" alt="" style="margin-bottom: 0;" class="dark-theme-only">
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-gray-200" style="padding: calc(var(--space) * 2) 0;">
    <div class="content-box-wide grid-landscape">
      <div></div>
      <FooterInfo/>
    </div>
  </footer>
</div>
</template>


<script>
import FooterInfo from '~/components/FooterInfo.vue'
import TopNav from '~/components/TopNav.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    FooterInfo,
    TopNav
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
