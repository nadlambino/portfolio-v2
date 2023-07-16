<script setup>
import { loadFull } from "tsparticles";
import particles from './../particles'
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, reactive, ref, watch } from 'vue';
import useObserver from './../hooks/intersects'
import AppNavbar from './AppNavbar.vue'
import { MdWavinghandOutlined } from 'oh-vue-icons/icons'
import { addIcons } from "oh-vue-icons";
import image from './../assets/images/webdev.svg'
import { useStorage } from "@vueuse/core";

addIcons(MdWavinghandOutlined)

const sectionElement = ref(null)
const navElement = ref(null)
const { isVisible } = useObserver(navElement, true, '.body-navbar')
const mode = useStorage('mode', 'dark')
const parts = reactive(particles)

watch(mode, () => {
    const color = mode.value === 'dark' ? '#394867' : '#c4d3e7'
    parts.particles.color.value = color;
    parts.particles.links.color = color;
}, {
    immediate: true
})

const particlesInit = async engine => {
    await loadFull(engine);
};

onMounted(() => {
    useHeaderIntersect('greet', sectionElement)
})

</script>

<template>
    <div class="content-wrapper" ref="sectionElement">
        <Particles
            :key="mode"
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="parts"
        />
        <div class="container">
            <div class="greet-content">
                <h3 class="greet-text">Hi there,
                    <v-icon class="wave" name="md-wavinghand-outlined" />
                </h3>
                <h1 class="intro-text">I am <span class="name">Ronald Lambino</span></h1>
                <h2 class="desc-text">a passionate web developer</h2>
                <h1 class="short-desc">
                    Experienced Web Developer with passion for
                    creating attractive and interactive websites
                    meeting customer needs and exceeding
                    expectations.
                </h1>
            </div>
            <div class="image-container">
                <img :src="image" alt="Web Development">
                <small><a href="https://storyset.com/web" target="_blank">Web illustrations by Storyset</a></small>
            </div>
        </div>
        <AppNavbar class="top-navbar" :class="!isVisible ? 'fixed-nav' : ''" />
        <AppNavbar ref="navElement" class="body-navbar" />
    </div>
</template>

<style scoped lang="scss">
.content-wrapper {
    @apply flex flex-col relative;

    .container {
        @apply flex flex-col justify-end max-w-screen-md w-full;

        @apply lg:flex-row;

        @apply xl:max-w-screen-lg;

        .greet-content {
            @apply relative z-20 w-full flex flex-col justify-center;

            @apply lg:w-1/2;

            .greet-text {
                @apply text-default text-2xl mb-2;

                @apply lg:text-3xl;

                .wave {
                    @apply w-6 h-6 text-green-accent;

                    @apply lg:w-8 lg:h-8;
                }
            }

            .intro-text {
                @apply dark:text-light text-4xl;

                @apply text-dark;

                @apply lg:text-6xl lg:whitespace-nowrap;

                .name {
                    @apply text-green-accent tracking-wide font-bold whitespace-nowrap;
                }
            }

            .desc-text {
                @apply text-default text-2xl;

                @apply lg:text-3xl;
            }

            .short-desc {
                @apply mt-5;
            }
        }

        .image-container {
            @apply w-full absolute left-[-20px] top-[50%] translate-y-[-50%] z-0;

            @apply lg:w-1/2 lg:relative lg:z-10 lg:left-0 lg:top-0 lg:translate-y-0;

            img {
                @apply w-full opacity-30 relative z-0;

                @apply lg:opacity-100;
            }

            small {
                @apply hidden absolute bottom-10 right-0;

                @apply lg:block;
            }
        }
    }
}
</style>