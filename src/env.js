import GreetSection from './components/GreetSection.vue'
import AboutMe from './components/AboutMe.vue'
import CareerHistory from './components/CareerHistory.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

export default {
    sections: [
        {
            component: GreetSection,
            active: true,
            id: 'home'
        },
        {
            component: AboutMe,
            active: true,
            id: 'about'
        },
        {
            component: CareerHistory,
            active: false,
            id: 'career'
        },
        {
            component: SkillsSection,
            active: true,
            id: 'skills'
        },
        {
            component: ProjectsSection,
            active: true,
            id: 'projects'
        },
    ]
}