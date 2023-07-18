import { createRouter, createWebHistory } from 'vue-router'
import DogList from '../components/DogList.vue'
import DogDetail from '../components/DogDetail.vue'
import DogImage from '../components/DogImage.vue'


const routes = [
    {
        path: '/',
        name: 'DogList',
        component: DogList
    },
    {
        path: '/dog/:breed',
        name: 'DogDetail',
        component: DogDetail,
        props: true
    },
    {
        path: '/image/:image',
        name: 'DogImage',
        component: DogImage,
        props: route => ({ image: route.params.image})
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router