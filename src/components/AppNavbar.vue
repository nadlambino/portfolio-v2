<script setup>
import env from './../env'

const sections = env.sections.filter(section => section.active === true);

</script>

<template>
    <nav class="navbar" ref="navElement">
        <ul>
            <li v-for="(section, i) in sections" :key="i" class="link-list">
                <a :href="`#${section.id}`">{{ section.name }}</a>
            </li>
            <li class="cv-list-item">
                <a href="/CV062023.pdf" target="_blank" class="btn-link">Download CV</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    @apply py-4 top-0 transition-all ease-in-out;

    ul {
        @apply flex gap-5 justify-center text-base font-normal;

        @apply lg:gap-10 lg:text-xl;

        li.link-list {
            @apply relative;

            &:first-child {
                @apply text-green-accent
            }

            &::after {
                @apply content-[''] absolute w-0 h-1 left-0 bottom-0 bg-green-accent transition-all ease-in-out;
            }



            &:hover {
                &::after {
                    @apply w-full;
                }
            }
        }
    }
}

.body-navbar {
    @apply mt-5;

    @apply lg:mt-10;

    ul {
        @apply flex-wrap;
    }
}

.top-navbar {
    @apply hidden fixed -top-24 transition-all ease-in-out
    justify-center items-center h-[60px] text-sm gap-2;
}

.fixed-nav {
    @apply flex top-0 z-30;

    .cv-list-item {
        @apply hidden;
    }
}

</style>
