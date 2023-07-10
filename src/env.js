import GreetSection from './components/GreetSection.vue'
import AboutMe from './components/AboutMe.vue'
import CareerHistory from './components/CareerHistory.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

export default {
    sections: [
        {
            component: GreetSection,
            active: true
        },
        {
            component: AboutMe,
            active: true
        },
        {
            component: CareerHistory,
            active: false
        },
        {
            component: SkillsSection,
            active: true
        },
        {
            component: ProjectsSection,
            active: true
        },
    ]
}