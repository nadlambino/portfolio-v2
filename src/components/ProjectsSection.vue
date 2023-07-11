<script setup>
import projects from './../fixtures/projects.js'
import ProjectItem from './ProjectItem.vue';
import useHeaderIntersect from './../hooks/header-intersects'
import { onMounted, ref } from 'vue';

const sectionElement = ref(null)

onMounted(() => {
    useHeaderIntersect('project', sectionElement, { rootMargin: '0px 0px 0px -200px'})
})

</script>

<template>
    <div class="content-wrapper" ref="sectionElement">
        <div class="content">
            <h1 class="title">Projects</h1>
            <div class="projects-wrapper">
                <ProjectItem v-for="(project, index) in projects" :key="index" :project="project" v-motion-slide-visible-once-right/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.projects-wrapper {
    @apply flex flex-col gap-10;
}
</style>