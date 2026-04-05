<script setup>
import AppMenu from './components/AppMenu.vue'
import sectionsList from './fixtures/sections'

const sections = sectionsList.filter((section) => section.active === true)

const getClass = (i) => {
  const order = i + 1
  if (i === 0) {
    return 'transparent'
  }

  return order % 2 === 0 ? 'even' : 'odd'
}
</script>

<template>
  <AppMenu />
  <section>
    <template v-for="(section, i) in sections" :key="i">
      <component
        :id="section.id"
        :is="section.component"
        :class="getClass(i)"
        :data-order="getClass(i)"
      />
    </template>
  </section>
  <footer class="footer-content">
    <div class="container">
      <p class="contact-text">
        Want to connect? Reach me at:
      </p>
      <a href="mailto:connect@nadlambino.com" class="email-link">
        connect@nadlambino.com
      </a>
      <p class="copyright">
        &copy; {{ new Date().getFullYear() }} Ronald Lambino. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-content {
  @apply flex flex-col items-center justify-center py-16 bg-transparent;

  .contact-text {
    @apply text-default text-lg mb-4;
  }

  .email-link {
    @apply flex items-center justify-center gap-2 text-light-accent dark:text-dark-accent text-2xl font-semibold no-underline hover:underline mb-6;
  }

  .copyright {
    @apply text-default text-sm opacity-70;
  }

  .container {
    @apply max-w-screen-md w-full text-center;
    @apply xl:max-w-screen-lg;
  }
}
</style>
