<script setup>
</script>

<template>
    <nav class="navbar" ref="navElement">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    @apply py-4 top-0 z-30 transition-all ease-in-out;

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
    @apply flex top-0;
}

</style>
