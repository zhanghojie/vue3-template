import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
