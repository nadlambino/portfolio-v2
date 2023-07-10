<script setup>
import { loadFull } from "tsparticles";
import absorber from './../particles/absorber'

const particlesInit = async engine => {
    await loadFull(engine);
};
</script>

<template>
    <div class="content-wrapper">
        <Particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :options="absorber"
        />
        <div class="content">
            <h3 class="greet-text">hello world</h3>
            <h1 class="intro-text">I am <span class="name">Ronald Lambino</span></h1>
            <h2 class="desc-text">a passionate web developer</h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content-wrapper {
    .content {
        @apply justify-center relative z-10 text-center
    }
    .greet-text {
        @apply text-default text-2xl mb-2;
    }

    .intro-text {
        @apply dark:text-light text-5xl;

        @apply text-dark;

        .name {
            @apply text-green-accent tracking-wide font-bold whitespace-nowrap;
        }
    }

    .desc-text {
        @apply text-default text-3xl
    }
}

.typing {
    animation: typing 11s steps(140), cursor .5s step-end infinite alternate;
    max-width: max-content;
    @apply whitespace-nowrap overflow-hidden border-r-2 border-solid border-green-accent inline-block;
}

@keyframes cursor {
    50% {
        border-color: transparent;
    }
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}
</style>