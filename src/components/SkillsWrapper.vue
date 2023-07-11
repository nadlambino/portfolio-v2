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
        <h3 class="label">{{ props.label }}</h3>
        <div class="skills">
            <SkillIcon
                v-for="(skill, index) in props.skills" 
                :key="index" 
                :skill="skill"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.label {
    @apply text-center mb-5;
}
.skills {
    @apply flex justify-center flex-wrap gap-3;

    @apply lg:gap-6;
    
    svg {
        @apply w-[80px] h-[80px]
    }
}

h3 {
    @apply font-semibold text-dark mb-2;

    @apply dark:text-light;
}

</style>