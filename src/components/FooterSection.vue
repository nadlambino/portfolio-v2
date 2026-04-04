<template>
  <footer class="footer-section">
    <div class="container">
      <p class="contact">
        <a href="mailto:connect@nadlambino.com">connect@nadlambino.com</a>
      </p>
      <p class="copyright">&copy; {{ new Date().getFullYear() }} Ronald Lambino. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer-section {
  @apply py-8 text-center text-sm text-gray-500 dark:text-gray-400;
  .contact a {
    @apply font-medium text-blue-600 hover:underline;
  }
  .copyright {
    @apply mt-2;
  }
}
</style>
