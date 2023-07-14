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
        @apply flex gap-5 justify-center text-base font-semibold;

        @apply lg:gap-10 lg:text-2xl;

        li {
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
}

.top-navbar {
    @apply hidden fixed -top-24 transition-all ease-in-out
    justify-center items-center h-[60px] text-sm gap-2;
}

.fixed-nav {
    @apply flex top-0 z-30;
}

</style>
