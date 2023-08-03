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
</template>
