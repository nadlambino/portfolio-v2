<script setup>
import { computed, toRefs } from 'vue';
import moment from 'moment'

const props = defineProps({
    skill: {
        type: Object,
        required: true
    },
    iconClass: {
        type: String
    }
});

const { iconClass, skill } = toRefs(props)
const experience = computed(() => {
    if (skill.value.start) {
        const format = 'YYYY-MM-DD'
        const start = moment(skill.value.start, format)
        const end = skill.value.end ? moment(skill.value.end, format) : moment()
        const years = end.diff(start, 'years')
        const months = end.diff(start, 'months')
        let append = 'years'

        if (years === 0) {
            append = months > 1 ? 'months' : 'month'
            return `${months} ${append}`
        }

        append = years > 1 ? 'years' : 'year'
        return `${years} ${append}`
    }

    return skill.value.fixed_time;
})
</script>

<template>
    <div class="icon-container">
        <img v-if="skill.image" :src="skill.image" :alt="skill.label" :class="iconClass" />
        <v-icon v-else :name="skill.icon" :class="iconClass" :style="{ color: skill.color }" />
        <span>{{ skill.label }}</span>
        <span class="experience">{{ experience }}</span>
    </div>
</template>

<style scoped lang="scss">
.icon-container {
    @apply flex flex-col items-center gap-0 w-14 h-20;
}
svg, img {
    @apply w-12 h-12 object-contain mb-2
}

span {
    @apply uppercase text-sm font-normal text-dark text-center;

    @apply dark:text-default;
}

.experience {
    @apply text-[11px];
}
</style>