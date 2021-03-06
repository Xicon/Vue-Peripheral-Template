import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProFile from '@/views/ProFile.vue';
import NotFound from '@/components/NotFound.vue';
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/profile', name: 'profile', component: ProFile },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
export const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: '_all-active',
    linkExactActiveClass: '_active',
});
//# sourceMappingURL=index.js.map