import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@views/HelloWorld.vue'
import Gallery from '@views/Gallery.vue'

const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'HelloWorld', component: HelloWorld },
	{ path: '/gallery', name: 'Gallery', component: Gallery },
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
