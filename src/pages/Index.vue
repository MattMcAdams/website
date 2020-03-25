<template>
  <layout>

    <section id="about" class="my-4">
      <div class="grid content-box-wide" style="--grid-gap: calc(var(--fluid-4) * 2); align-items: center; margin: calc(var(--fluid-4) * 4) auto;">
        <div>
          <h2>Nice to meet you</h2>
          <p>I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p class="txt-small">In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="button" href="https://assets.mattmcadams.com/McAdams-CV-Jan-2020.pdf">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="/images/website-portrait.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." class="light-theme-only">
          <img src="/images/website-portrait-dark.png" alt="Matthew McAdams, a young adult with dark brown hair and tidy beard. He is dressed in light gray pants, a blue button down, and a dark gray blazer." class="dark-theme-only">
        </div>
      </div>
    </section>

    <section class="bg-gray-200" style="margin: calc(var(--fluid-4) * 4) 0; padding: calc(var(--fluid-4) * 4) 0;">
      <div class="grid-landscape content-box-wide" style="--grid-gap: calc(var(--space) * 4);">
        <div style="max-width: 500px; margin: 0 auto calc(var(--space) * 2) auto;">
          <img src="/images/art-logic.png" alt="Illustration of a sketchbook and desktop computer displaying code" class="light-theme-only">
          <img src="/images/art-logic-dark.png" alt="Illustration of a sketchbook and desktop computer displaying code" class="dark-theme-only">
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
        <div class="grid" style="--grid-gap: calc(var(--space) * 4);">
          <form
            class="bg-gray-100 rounded-large"
            style="padding: calc(var(--space) * 2); margin-bottom: calc(var(--space) * -6);"
            method="POST"
            data-netlify="true"
            name="contact"
          >
            <label>Name</label>
            <input type="text" name="name">
            <label>Email Address</label>
            <input type="email" name="email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <p class="txt-right" style="margin-bottom: 0;"><button type="submit">Submit</button></p>
          </form>
          <div style="align-self: end;">
            <img src="/images/city.png" alt="" style="margin-bottom: 0;" class="light-theme-only">
            <img src="/images/city-dark.png" alt="" style="margin-bottom: 0;" class="dark-theme-only">
          </div>
        </div>
      </div>
    </section>

  </layout>
</template>

<script>
import Parallax from '~/components/Parallax.vue'
export default {
  components: {
    Parallax
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
