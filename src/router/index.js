import { createRouter, createWebHistory } from 'vue-router'
import DogList from '../components/DogList.vue'
import DogDetail from '../components/DogDetail.vue'


const routes = [
    {
        path: '/',
        name: 'DogList',
        component: DogList
    },
    {
        path: '/dog/:breed',
        name: 'DogDetail',
        component: DogDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router