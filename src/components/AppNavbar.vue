<script setup>
import env from './../env'

const sections = env.sections.filter(section => section.active === true);

</script>

<template>
    <nav class="navbar" ref="navElement">
        <ul>
            <li v-for="(section, i) in sections" :key="i">
                <a :href="`#${section.id}`">{{ section.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    @apply py-4 top-0 transition-all ease-in-out;

    ul {
        @apply flex gap-5 justify-center text-base;

        @apply lg:gap-10 lg:text-xl;

        li {
            &:first-child {
                @apply text-green-accent
            }
        }
    }
}

.body-navbar {
    @apply mt-5;

    @apply lg:mt-10;
}

.top-navbar {
    @apply hidden fixed -top-24 transition-all ease-in-out
    justify-center items-center h-[60px] text-sm gap-2;
}

.fixed-nav {
    @apply flex top-0 z-30;
}

</style>
