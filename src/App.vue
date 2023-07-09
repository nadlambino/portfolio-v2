<script setup>
import AppMenu from './components/AppMenu.vue'
import GreetSection from './components/GreetSection.vue'
import AboutMe from './components/AboutMe.vue'
import CareerHistory from './components/CareerHistory.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

</script>

<template>
  <AppMenu />
  <section>
    <GreetSection />
    <AboutMe />
    <CareerHistory />
    <SkillsSection />
    <ProjectsSection />
  </section>
</template>
