<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
const { article } = toRefs(props)
</script>

<template>
  <div class="article-container">
    <div class="article">
      <img :src="article.social_image" :alt="article.title" />
      <div class="details-container">
        <a :href="article.url" target="_blank" class="article-title">{{ article.title }}</a>
        <p class="description">
          {{ article.description }} &nbsp;
          <a :href="article.url" target="_blank" class="read-more">read more</a>
        </p>
        <div class="metadata">
          <small>
            {{ article.reading_time_minutes }}
            {{ article.reading_time_minutes > 1 ? 'minutes' : 'minute' }} reading time
          </small>
          <span class="dot">•</span>
          <small>
            {{ article.public_reactions_count }}
            {{ article.public_reactions_count > 1 ? 'reactions' : 'reaction' }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  @apply flex flex-col items-center gap-5 bg-lighter;

  @apply lg:flex-row lg:gap-0;

  @apply dark:bg-darkest;

  img {
    @apply w-auto object-contain;

    @apply lg:max-w-xs;
  }

  .details-container {
    @apply p-5 flex flex-col gap-3 w-full;

    @apply lg:py-0;
  }

  .article-title {
    @apply text-2xl font-bold;
  }

  .description {
    @apply text-base;
  }

  .read-more {
    &:hover {
      @apply underline;
    }
  }

  .metadata {
    @apply flex gap-3;
  }

  .dot,
  small {
    @apply text-darkest/60;
    @apply dark:text-light/40;
  }
}
</style>
