<script setup>
import { addIcons } from 'oh-vue-icons';
import { 
    ViFileTypeHtml, ViFileTypeCss, ViFileTypeSass, FaBootstrap, ViFileTypeTailwind, ViFileTypeJsOfficial, 
    CoJquery, ViFileTypeTypescriptOfficial, ViFileTypeVue, ViFileTypeReactjs, ViFileTypePhp3, CoLaravel, IoLogoNodejs, 
    ViFileTypeMysql, CoRedis, ViFileTypeMongo, CoRedux, SiExpress, ViFileTypeGit, CoGithub, ViFileTypeGitlab, 
    SiPhpstorm, ViFileTypeDocker, CoSocketIo, SiXampp, ViFileTypeVite, CoWebpack, ViFileTypeComposer, ViFileTypeNpm 
} from 'oh-vue-icons/icons';
import { frontend, backend, database, tools } from './../fixtures/skills';
import SkillsWrapper from './SkillsWrapper.vue';

addIcons(
    ViFileTypeHtml, ViFileTypeCss, ViFileTypeJsOfficial, ViFileTypeSass, ViFileTypeVue,
    FaBootstrap, ViFileTypeTailwind, CoJquery, ViFileTypeTypescriptOfficial, ViFileTypeReactjs,
    ViFileTypePhp3, CoLaravel, IoLogoNodejs, ViFileTypeMysql, CoRedis, ViFileTypeMongo, CoRedux,
    SiExpress, ViFileTypeGit, CoGithub, ViFileTypeGitlab, SiPhpstorm, ViFileTypeDocker, CoSocketIo,
    SiXampp, ViFileTypeVite, CoWebpack, ViFileTypeComposer, ViFileTypeNpm
);
</script>

<template>
    <div class="content-wrapper">
        <div class="content">
            <h1 class="title">Skills</h1>
            <div class="skills-wrapper">
                <SkillsWrapper label="Front-End" :skills="frontend" v-motion-slide-visible-once-bottom/>
                <SkillsWrapper label="Back-End" :skills="backend" v-motion-slide-visible-once-bottom/>
                <SkillsWrapper label="Databases" :skills="database" v-motion-slide-visible-once-bottom/>
                <SkillsWrapper label="Tools" :skills="tools" v-motion-slide-visible-once-bottom/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.skills-wrapper {
    @apply grid grid-flow-row grid-cols-1 gap-10;

    @apply lg:grid-cols-4;
}
</style>