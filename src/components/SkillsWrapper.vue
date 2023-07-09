<script setup>
import SkillIcon from './SkillIcon.vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div>
        <h3>{{ props.label }}</h3>
        <div class="skills">
            <SkillIcon
                v-for="(skill, index) in props.skills" 
                :key="index" 
                :icon="skill.icon" 
                :image="skill.image"
                :label="skill.label" 
                :color="skill.color"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.skills {
    @apply flex justify-between flex-wrap gap-4;
    
    svg {
        @apply w-[80px] h-[80px]
    }
}

h3 {
    @apply font-semibold text-dark mb-2;

    @apply dark:text-light;
}

</style>