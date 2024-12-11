import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from '@/views/HomepageView.vue';
import AddFormView from '@/views/AddFormView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomepageView,
    },
    {
      path: '/addForm',
      name: 'addForm',
      component: AddFormView,
    },
  ],
});

export default router;
