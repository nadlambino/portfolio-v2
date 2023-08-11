import GreetSection from './../components/GreetSection.vue'
import AboutMe from './../components/AboutMe.vue'
import CareerHistory from './../components/CareerHistory.vue'
import SkillsSection from './../components/SkillsSection.vue'
import ProjectsSection from './../components/ProjectsSection.vue'
import ArticlesList from './../components/ArticlesList.vue'
import CertificatesSection from './../components/CertificatesSection.vue'

export default [
  {
    component: GreetSection,
    active: true,
    id: 'home',
    name: 'Home'
  },
  {
    component: AboutMe,
    active: false,
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
    name: 'Skills'
  },
  {
    component: ProjectsSection,
    active: true,
    id: 'projects',
    name: 'Projects'
  },
  {
    component: ArticlesList,
    active: true,
    id: 'articles',
    name: 'Articles'
  },
  {
    component: CertificatesSection,
    active: true,
    id: 'certificates',
    name: 'Certificates'
  }
]
