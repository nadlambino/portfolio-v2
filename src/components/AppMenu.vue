<script setup>
import { addIcons } from 'oh-vue-icons'
import { MdDarkmodeOutlined, MdWbsunnyOutlined } from "oh-vue-icons/icons"
import { useStorage } from '@vueuse/core'
import { onMounted, watch } from 'vue';
import NavLink from './NavLink.vue';

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

const menus = [
  { label: 'Home', link: '/' },
  { label: 'Skills', link: '/skills' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' }
]

onMounted(() => {
    toggleMode()
})
</script>

<template>
    <header>
        <h1 class="logo"><span class="firstname">Nad</span><span class="lastname">Lambino</span></h1>
        <ul class="navigations">
            <li v-for="(menu, index) in menus" :key="index">
                <NavLink class="nav-link" :label="menu.label" :link="menu.link"/>
            </li>
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
    @apply flex flex-col gap-2 justify-between px-5 py-3 relative;

    @apply md:flex-row;

    .logo {
        @apply font-extrabold tracking-wide;

        .firstname {
            @apply text-green-accent;
        }
    }

    .navigations {
        @apply flex justify-between;

        @apply md:gap-2;
    }
}
</style>