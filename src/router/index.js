import Vue from 'vue'
import VueGoogleApi from 'vue-google-api'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewProject from '../views/NewProject.vue'
import CommunityProjects from '../views/CommunityProjects.vue'
import Landing from '../views/Landing.vue'
import DisplayProject from '../views/DisplayProject.vue'
import InsertEdit from '../views/InsertEdit.vue'

const config = {
    apiKey: 'AIzaSyA9iK8oArKlDXyLB2KokNLya-U57Y9yZo8',
    clientId: '943909818876-vm778oed4r48lq1q3h7fuq56klg96nmg.apps.googleusercontent.com',
    scope: 'profile email'
}

Vue.use(VueGoogleApi, config)
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/new',
        name: 'NewProject',
        component: NewProject
    },
    {
        path: '/community',
        name: 'CommunityProjects',
        component: CommunityProjects
    },
    {
        path: '/project/:projectName',
        name: 'DisplayProject',
        component: DisplayProject
    },
    {
        path: '/project/:projectName/edit',
        name: 'InsertEdit',
        component: InsertEdit
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
