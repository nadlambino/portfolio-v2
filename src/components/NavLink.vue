<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const router = useRouter();
const isActive = computed(() => router.currentRoute.value.path === props.link)
</script>

<template>
    <RouterLink :to="props.link" class="nav-link" :class="isActive ? 'active': ''">{{ props.label }}</RouterLink>
</template>

<style scoped>
.nav-link {
    @apply py-1 px-2 rounded hover:text-green-accent hover:bg-light;
    
    @apply hover:dark:bg-dark;

    &.active {
        @apply text-green-accent bg-light;

        @apply dark:bg-dark;
    }
}
</style>