<template>
  <layout>
    <Parallax/>

    <section id="about" class="my-4">
      <div class="landscape:grid grid-cols-2 gap-4 container-wide">
        <div>
          <h2 class="text-3xl mb-2">Nice to meet you</h2>
          <p class="text-md mb-1 leading-normal">I’m a front end developer with a background in graphic design currently living in the Birmingham area. Let’s make something cool together.</p>
          <p class="mb-1 txt-sm leading-relaxed">In the spring of 2020, I got my bachelor of fine arts from the University of Alabama at Birmingham while researching UX design, code semantics, and design systems. My award winning work is bold, precise, and modern, focusing on the division of space and the use of strong color. When I’m not pecking at code or pushing pixels, I enjoy exploring fantasy worlds through books and video games.</p>
          <p><a class="py-05 px-1 inline-block bg-primary text-white rounded" href="https://assets.mattmcadams.com/McAdams-CV-Jan-2020.pdf">Curriculum Vitae</a></p>
        </div>
        <div>
          <img src="https://assets.mattmcadams.com/portrait.jpg" class="rounded-lg">
        </div>
      </div>
    </section>

    <section class="bg-gray-200 py-4">
      <div class="max-w-wide mx-auto">
        <h2 class="text-center mb-2 text-4xl">Portfolio & Projects</h2>
        <div class="grid grid-cols-4 gap-1" style="margin-bottom: var(--space);">
          <ProjectCard v-for="edge in $page.projects.edges" :key="edge.node.id" :project="edge.node"/>
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
import Parallax from '../components/Parallax.vue'
export default {
  components: {
    Parallax
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
