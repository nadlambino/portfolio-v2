<script setup>
import GreetSection from './../components/GreetSection.vue'
import AboutMe from './../components/AboutMe.vue'
import CareerHistory from './../components/CareerHistory.vue'
</script>

<template>
    <section>
        <GreetSection />
        <div class="content">
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <AboutMe />
            <CareerHistory />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    @apply p-5 grid grid-flow-row h-screen w-full pt-12 relative;

    @apply lg:grid-flow-col lg:grid-cols-2;
}
</style>