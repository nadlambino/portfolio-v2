<script setup>
import { addIcons } from 'oh-vue-icons'
import { MdDarkmodeOutlined, MdWbsunnyOutlined } from "oh-vue-icons/icons"
import { useStorage } from '@vueuse/core'
import { onMounted, watch } from 'vue';

addIcons(MdDarkmodeOutlined, MdWbsunnyOutlined)

const mode = useStorage('mode', 'dark')
watch(mode, toggleMode)
function handleModeToggle() {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
    toggleMode();
}
function toggleMode() {
    document.body.classList.remove('dark')
    document.body.classList.remove('light')
    document.body.classList.add(mode.value)
}

onMounted(() => {
    toggleMode()
})
</script>

<template>
    <header>
        <h1 class="logo"><span class="firstname">R</span><span class="lastname">L</span></h1>
        <ul class="navigations">
            <li>
                <button @click="handleModeToggle">
                    <v-icon name="md-darkmode-outlined" v-if="mode === 'light'" />
                    <v-icon name="md-wbsunny-outlined" v-else/>
                </button>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    @apply flex gap-2 justify-between items-center px-5 py-3 fixed w-full top-0 z-10 bg-lighter;

    @apply dark:bg-darker;

    .logo {
        @apply font-extrabold tracking-wide text-3xl;

        .firstname {
            @apply text-green-accent;
        }
    }

    .navigations {
        @apply flex justify-between gap-1;

        @apply lg:gap-8;
    }
}
</style>