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
        <div class="image-container">
            <img v-if="project.image" :src="project.image" class="image" :alt="project.name" />
            <div v-else class="image">
                <span>No Image Available</span>
            </div>
        </div>
        <div class="project-content">
            <div class="header">
                <h1 class="name">{{ project.name }}</h1>
                <div class="links-container">
                    <a v-if="project.git_url" :href="project.git_url" target="_blank">Github</a>
                    <a v-if="project.live_url" :href="project.live_url" target="_blank">Live</a>
                </div>
            </div>
            <p class="description" v-html="project.description"></p>
            <div class="stacks-container">
                <span class="stack" v-for="(stack, index) in project.stacks" :key="index">
                    {{ stack }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-container {
    @apply flex flex-col gap-2 bg-light min-h-[250px];

    @apply dark:bg-darker;

    @apply lg:flex-row lg:gap-0 lg:items-center;

    &:nth-child(even) {
        .image-container {
            @apply lg:order-2;
        }

        .project-content {
            @apply lg:order-1
        }
    }

    .image-container {
        @apply w-full h-auto;

        .image {
            @apply bg-default/10 w-full h-full aspect-video flex justify-center items-center;

            @apply dark:bg-darkest/50;

            span {
                @apply font-thin;
            }
        }
    }

    .project-content {
        @apply flex flex-col gap-3 p-5;

        .header {
            @apply flex justify-between items-center;

            .name {
                @apply text-xl font-semibold;
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
}
</style>