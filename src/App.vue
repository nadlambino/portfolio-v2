<script setup>
import AppMenu from './components/AppMenu.vue'
import env from './env'

const sections = env.sections.filter(section => section.active != false)

</script>

<template>
  <AppMenu />
  <section>
    <template v-for="(section, i) in sections" :key="i">
      <component :is="section.component" :class="((i+1) % 2) === 0 ? 'even' : 'odd'" :data-order="((i+1) % 2) === 0 ? 'even' : 'odd'" />
    </template>
  </section>
</template>
