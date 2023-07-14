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
            id: 'home',
            name: 'Home'
        },
        {
            component: AboutMe,
            active: true,
            id: 'about',
            name: 'About'
        },
        {
            component: CareerHistory,
            active: false,
            id: 'career',
            name: 'Career'
        },
        {
            component: SkillsSection,
            active: true,
            id: 'skills',
            name: 'Skill'
        },
        {
            component: ProjectsSection,
            active: true,
            id: 'projects',
            name: 'Projects'
        },
    ]
}