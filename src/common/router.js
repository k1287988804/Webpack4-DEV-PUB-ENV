import VueRouter from 'vue-router'
import HomeContainer from './../routes/HomeContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer }
    ]
})


export default router