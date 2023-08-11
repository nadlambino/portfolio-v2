<script setup>
import sectionsList from './../fixtures/sections'
import { addIcons } from 'oh-vue-icons'
import { LaHomeSolid, LaCodeSolid, LaCertificateSolid } from 'oh-vue-icons/icons/la'
import { MdWebSharp, MdWebassetSharp } from 'oh-vue-icons/icons/md'

addIcons(LaHomeSolid, LaCodeSolid, MdWebSharp, LaCertificateSolid, MdWebassetSharp)

const sections = sectionsList.filter((section) => section.active === true)
const props = defineProps({
  isTop: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <nav class="navbar" ref="navElement">
    <ul :class="{ top: isTop }">
      <li v-for="(section, i) in sections" :key="i" class="link-list">
        <a :href="`#${section.id}`" class="menu-link">
          <span v-if="!props.isTop">{{ section.name }}</span>
          <div v-else class="icon-container">
            <v-icon :name="section.icon" class="icon" />
            <span>{{ section.name }}</span>
          </div>
        </a>
      </li>
      <li class="cv-list-item">
        <a href="/CV062023.pdf" target="_blank" class="btn-link">Open CV</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  @apply py-4 top-0 transition-all ease-in-out;

  ul {
    @apply flex gap-5 justify-center items-center text-base font-normal;

    @apply lg:gap-10 lg:text-xl;

    li.link-list {
      @apply relative;
    }

    &.top {
      @apply gap-8;
    }
  }
}

.menu-link {
  @apply flex justify-center items-center;

  .icon {
    @apply w-6 h-6;
  }

  .icon-container {
    @apply flex flex-col items-center justify-center;

    span {
      @apply hidden lg:block text-sm;
    }
  }
}

.body-navbar {
  @apply mt-5;

  @apply lg:mt-10;

  ul {
    @apply flex-wrap;
  }

  .cv-list-item {
    @apply relative z-10;
  }
}

.top-navbar {
  @apply hidden fixed -top-24 transition-all ease-in-out
    justify-center items-center h-[60px] text-sm gap-2;
}

.fixed-nav {
  @apply flex top-0 z-30;

  .cv-list-item {
    @apply hidden;

    @apply lg:block;
  }
}
</style>
