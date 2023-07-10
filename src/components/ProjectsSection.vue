<script setup>
import projects from './../fixtures/projects.js'
import ProjectItem from './ProjectItem.vue';

</script>

<template>
    <div class="content-wrapper">
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