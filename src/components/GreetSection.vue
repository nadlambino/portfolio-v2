<script setup>
import { loadFull } from "tsparticles";
import absorber from './../particles'
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue';
import useObserver from './../hooks/intersects'
import AppNavbar from './AppNavbar.vue'
import { MdWavinghandOutlined } from 'oh-vue-icons/icons'
import { addIcons } from "oh-vue-icons";
import image from './../assets/images/webdev.svg'

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
    @apply flex flex-col;

    .container {
        @apply flex flex-col justify-end max-w-screen-md w-full relative;

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

                @apply lg:text-6xl;

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
            @apply w-full absolute left-[-20px] top-0;

            @apply lg:w-1/2 lg:relative lg:z-10 translate-x-0 translate-y-0;

            img {
                @apply w-full opacity-30;

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