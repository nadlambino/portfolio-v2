<script setup>
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue'
import ArticleItem from './ArticleItem.vue'

const sectionElement = ref(null)

const articles = ref([])
async function getArticles() {
  articles.value = await (await fetch('https://dev.to/api/articles?username=nadlambino')).json()
}

onMounted(async () => {
  useHeaderIntersect('articles', sectionElement)
  await getArticles()
})
</script>

<template>
  <div class="content-wrapper" ref="sectionElement">
    <div class="content">
      <h1 class="title">Articles</h1>
      <div class="articles-wrapper">
        <ArticleItem v-for="article in articles" :key="article.id" :article="article" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.articles-wrapper {
  @apply flex flex-col gap-10;
}
</style>
