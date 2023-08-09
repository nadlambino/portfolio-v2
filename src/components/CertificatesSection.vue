<script setup>
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue'
import { NCarousel, NCarouselItem } from 'naive-ui'
import certificates from './../fixtures/certificates'

const sectionElement = ref(null)

onMounted(async () => {
  useHeaderIntersect('articles', sectionElement)
})
</script>

<template>
  <div class="content-wrapper" ref="sectionElement">
    <div class="content">
      <h1 class="title">Certificates</h1>
      <div class="certificates-wrapper">
        <n-carousel
          effect="card"
          prev-slide-style="transform: translateX(-110%) translateZ(-600px);"
          next-slide-style="transform: translateX(10%) translateZ(-600px);"
          :show-dots="false"
          class="carousel-container"
          :draggable="true"
        >
          <n-carousel-item
            class="carousel-item"
            v-for="(cert, i) in certificates"
            :key="i"
            :class="{ 'n-carousel__slide--current': certificates.length === 1 }"
          >
            <img class="carousel-img" :src="cert.image" />
          </n-carousel-item>
        </n-carousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.certificates-wrapper {
  @apply flex flex-col gap-5 py-10;
}

.carousel-container {
  @apply h-[200px];

  @apply lg:h-[500px];
}

.carousel-item {
  width: 80% !important;
  display: flex;
  justify-content: center;
}

.carousel-img {
  @apply h-full w-full aspect-video object-contain cursor-grab;
}

:deep(.n-carousel__slide--current) {
  opacity: 1 !important;
  transform: translateX(-50%) translateZ(0) !important;
  z-index: 1 !important;
}
</style>
