<template>
  <layout>
    <Parallax/>

    <section id="about" class="my-4">
      <div class="grid-landscape content-box-wide">
        <div>
          <h2>Nice to meet you</h2>
          <p class="txt-h4">I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p>In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="button" href="https://assets.mattmcadams.com/McAdams-CV-Jan-2020.pdf">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="https://assets.mattmcadams.com/portrait.jpg" class="rounded-large">
        </div>
      </div>
    </section>

    <section>
      <div class="content-box section">
        <h2 class="txt-center">Say Hello</h2>
        <p class="txt-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
      </div>

      <div class="content-box-wide">
        <div class="grid-landscape" style="--grid-gap: calc(var(--space) * 4);">
          <form
            class="bg-gray-200 rounded-large"
            style="padding: calc(var(--space) * 2); margin-bottom: calc(var(--space) * -8);"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
            name="contact"
          >
            <label>Name</label>
            <input type="text" name="name">
            <label>Email Address</label>
            <input type="email" name="email">
            <label>Message</label>
            <textarea name="message"></textarea>
            <div class="grid-landscape" style="grid-template-columns: 1fr 1fr;">
              <div><div data-netlify-recaptcha="true">Captcha</div></div>
              <div><p class="txt-right" style="margin-bottom: 0;"><button type="submit">Submit</button></p></div>
            </div>
          </form>
          <div style="align-self: end;"><img src="https://assets.mattmcadams.com/city-outline.png" alt="" style="margin-bottom: 0;"></div>
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
