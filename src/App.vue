<script setup>
import AppMenu from './components/AppMenu.vue'
import GreetSection from './components/GreetSection.vue'
import AboutMe from './components/AboutMe.vue'
import CareerHistory from './components/CareerHistory.vue'
import SkillsSection from './components/SkillsSection.vue'

</script>

<template>
  <AppMenu />
  <section>
    <GreetSection />
    <AboutMe />
    <CareerHistory />
    <SkillsSection />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply p-5 max-w-screen-lg m-auto snap-y snap-mandatory
}
</style>
