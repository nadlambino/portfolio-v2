<script setup>
import { toRefs } from 'vue'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { NCarousel } from 'naive-ui'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { project } = toRefs(props)
</script>

<template>
  <div class="project-container">
    <div class="image-container">
      <n-carousel v-if="project.images.length > 0" show-arrow autoplay draggable>
        <img v-for="(image, i) in project.images" :key="i" class="carousel-img" :src="image" />
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <n-icon><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <n-icon><ArrowForward /></n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
      <div class="no-image" v-else>
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
      <ul v-if="project.features">
        <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
      </ul>
      <div class="stacks-container">
        <span class="stack" v-for="(stack, index) in project.stacks" :key="index">
          {{ stack }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './../assets/carousel.css';

.project-container {
  @apply flex flex-col gap-2 bg-light min-h-[250px];

  @apply dark:bg-darker;

  @apply lg:flex-row lg:gap-0 lg:items-center;

  &:nth-child(even) {
    .image-container {
      @apply lg:order-2;
    }

    .project-content {
      @apply lg:order-1;
    }
  }

  .image-container {
    @apply w-full h-auto;

    .image {
      @apply bg-default/10 w-full object-contain flex justify-center items-center;

      @apply dark:bg-darkest/50;

      span {
        @apply font-thin;
      }
    }

    .no-image {
      @apply bg-default/10 aspect-video flex justify-center items-center;

      @apply dark:bg-darkest/50;

      span {
        @apply font-thin;
      }
    }
  }

  .project-content {
    @apply flex flex-col gap-3 p-5;

    @apply lg:w-3/4;

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

    ul {
      @apply list-disc pl-5 italic;
    }

    .stacks-container {
      @apply flex flex-wrap gap-2 text-sm;

      .stack {
        @apply border border-solid border-light-accent rounded px-2 text-light-accent font-normal;

        @apply dark:border-dark-accent dark:text-dark-accent;
      }
    }
  }
}
</style>
