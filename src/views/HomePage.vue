<script setup>
import GreetSection from './../components/GreetSection.vue'
import AboutMe from './../components/AboutMe.vue'
</script>

<template>
    <section>
        <GreetSection />
        <div class="content">
            <AboutMe />
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    @apply p-5 grid grid-flow-row h-screen w-full pt-12 relative;

    @apply lg:grid-flow-col grid-cols-2;

    .content {
        @apply py-5 flex flex-col justify-center;
    }
}
</style>