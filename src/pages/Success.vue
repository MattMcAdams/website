<template>
<layout>
  <div class="grid-landscape container-wide">
    <div class="mb-1-fluid">
      <img :src="this.$store.state.darkTheme ? '/images/assets/email-dark.svg':'/images/assets/email.svg'" alt="" style="max-width: 500px; margin: auto; width: 100%;">
    </div>
    <div style="align-self: center;">
      <h1>Thanks!</h1>
      <p>Your message has been successfully sent. Thank you for your interest in my work and for reaching out to me</p>
      <p>I’ll be in touch soon!</p>
      <p><a href="/" class="button">Return Home</a></p>
    </div>
  </div>
</layout>
</template>
