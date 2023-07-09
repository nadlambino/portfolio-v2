<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String
    },
    image: {
        type: String
    },
    iconClass: {
        type: String
    },
    color: {
        type: String
    }
});

const { icon, iconClass, label, color } = toRefs(props)
</script>

<template>
    <div class="icon-container">
        <img v-if="image" :src="image" :alt="label" :class="iconClass" />
        <v-icon v-else :name="icon" :class="iconClass" :style="{ color }" />
        <span>{{ label }}</span>
    </div>
</template>

<style scoped lang="scss">
.icon-container {
    @apply flex flex-col items-center gap-2;
}
svg, img {
    @apply w-[50px] h-[50px] object-contain
}

span {
    @apply uppercase text-xs font-normal text-dark;

    @apply dark:text-default;
}
</style>