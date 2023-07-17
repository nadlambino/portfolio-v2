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
    <header id="header">
        <div class="container">
            <h1 class="logo">
                <a href="/#home">
                    <span class="firstname">R</span><span class="lastname">L</span>
                </a>
            </h1>
            <ul class="navigations">
                <li>
                    <button @click="handleModeToggle">
                        <v-icon name="md-darkmode-outlined" v-if="mode === 'light'" />
                        <v-icon name="md-wbsunny-outlined" v-else/>
                    </button>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    @apply flex justify-center items-center fixed w-full top-0 z-30;
    
    .container {
        @apply max-w-screen-md flex gap-2 justify-between items-center py-3 w-full px-5;

        @apply lg:px-0;
        
        @apply xl:max-w-screen-lg;
    }

    .logo {
        @apply font-extrabold tracking-wide text-3xl;

        .firstname {
            @apply text-light-accent;

            @apply dark:text-dark-accent;
        }

        .lastname {
            @apply text-darkest dark:text-lighter;
        }
    }

    .navigations {
        @apply flex justify-between gap-1;

        @apply lg:gap-8;
    }
}
</style>