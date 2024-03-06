import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/Spaces', component: () => import('@/layouts/Spaces.vue') },
  { path: '/Login', component: () => import('@/pages/Login.vue') },
  {
    path: '/', component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('@/pages/Home.vue') },
      { path: '/Task/:pos', props: true, component: () => import('@/pages/Task.vue') },

    ]
  },

  { path: '/test/', component: () => import('@/pages/test.vue') },
  { path: '/test/:pos', props: true, component: () => import('@/pages/test.vue') },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
