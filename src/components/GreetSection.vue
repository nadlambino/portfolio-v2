<script setup>
import { loadFull } from "tsparticles";
import absorber from './../particles'
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue';
import useObserver from './../hooks/intersects'
import AppNavbar from './AppNavbar.vue'
import { MdWavinghandOutlined } from 'oh-vue-icons/icons'
import { addIcons } from "oh-vue-icons";

addIcons(MdWavinghandOutlined)

const sectionElement = ref(null)
const navElement = ref(null)
const { isVisible } = useObserver(navElement, true, '.body-navbar')

onMounted(() => {
    useHeaderIntersect('greet', sectionElement)
})

const particlesInit = async engine => {
    await loadFull(engine);
};
</script>

<template>
    <div class="content-wrapper" ref="sectionElement">
        <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="absorber"
        />
        <div class="greet-content">
            <h3 class="greet-text">Hi,
                <v-icon class="wave" name="md-wavinghand-outlined" />
            </h3>
            <h1 class="intro-text">I am <span class="name">Ronald Lambino</span></h1>
            <h2 class="desc-text">a passionate web developer</h2>
        </div>
        <AppNavbar class="top-navbar" :class="!isVisible ? 'fixed-nav' : ''" />
        <AppNavbar ref="navElement" class="body-navbar" />
    </div>
</template>

<style scoped lang="scss">
.content-wrapper {
    @apply flex flex-col;

    .greet-content {
        @apply justify-center relative z-10 text-center;
    }
    .greet-text {
        @apply text-default text-lg mb-2;

        @apply lg:text-3xl lg:mb-5;

        .wave {
            @apply w-8 h-8 text-green-accent;
        }
    }

    .intro-text {
        @apply dark:text-light text-4xl;

        @apply text-dark;

        @apply lg:text-6xl lg:mb-3;

        .name {
            @apply text-green-accent tracking-wide font-bold whitespace-nowrap;
        }
    }

    .desc-text {
        @apply text-default text-2xl;

        @apply lg:text-3xl;
    }
}
</style>