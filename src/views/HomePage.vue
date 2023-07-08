<script setup>

</script>

<template>
    <div class="section">
        <div class="greet-container">
            <h3 class="greet-text">hello world</h3>
            <h1 class="intro-text">I am <span class="name">Ronald Lambino</span></h1>
            <h2 class="desc-text">a passionate web developer</h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
.section {
    height: calc(100vh - 50px);

    @apply p-5 flex justify-center items-center
}

.greet-container {
    @apply w-full;

    @apply lg:w-1/2;

    .greet-text {
        @apply text-default text-xl
    }

    .intro-text {
        @apply text-lighter text-4xl;

        @apply text-dark;

        .name {
            @apply text-green-accent tracking-wide;
        }
    }

    .desc-text {
        @apply text-default text-2xl
    }
}
</style>