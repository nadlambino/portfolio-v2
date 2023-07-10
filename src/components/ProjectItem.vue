<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});

const { project } = toRefs(props);
</script>

<template>
    <div class="project-container">
        <div class="image"></div>
        <div class="header">
            <h1 class="name">{{ project.name }}</h1>
            <div class="links-container">
                <a v-if="project.git_url" :href="project.git_url" target="_blank">Github</a>
                <a v-if="project.live_url" :href="project.live_url" target="_blank">Live</a>
            </div>
        </div>
        <p class="description">
            {{ project.description }}
        </p>
        <div class="stacks-container">
            <span class="stack" v-for="(stack, index) in project.stacks" :key="index">
                {{ stack }}
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-container {
    @apply flex flex-col gap-2;

    .image {
        @apply w-full h-[300px] bg-default/20;

        @apply dark:bg-default/10;
    }
    .header {
        @apply flex justify-between items-center;

        .name {
            @apply text-xl font-semibold mt-3;
        }

        .links-container {
            @apply flex gap-5;
        }
    }
    .description {
        @apply m-0;
    }
    .stacks-container {
        @apply flex flex-wrap gap-2 text-sm;

        .stack {
            @apply border border-solid border-green-accent rounded px-2 text-green-accent font-normal
        }
    }
}
</style>