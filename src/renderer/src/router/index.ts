import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../view/index.vue')
    },
    /*    {
          path: '/macdonald',
          component: () => import('../view/macdonald/index.vue')
        },*/
    {
      path: '/team-device-status',
      component: () => import('../view/macdonald/team-device-status.vue')
    },
    {
      path: '/uncleRay',
      component: () => import('../view/uncleRay/index.vue')
    },
    {
      path: '/login',
      component: () => import('../view/login/index.vue')
    },
    {
      path: '/login/idp',
      component: () => import('../view/login/idp.vue')
    },
    {
      path: '/logout',
      component: () => import('../view/logout/index.vue')
    },
    {
      path: '/add-user',
      component: () => import('../view/addUser/index.vue')
    },
    {
      path: '/open',
      component: () => import('../view/open/index.vue')
    },
    {
      path: '/local',
      component: () => import('../view/local/index.vue')
    },
    {
      path: '/geoProxy',
      component: () => import('../view/geoProxy/index.vue')
    },
    {
      path: '/localApplications',
      component: () => import('../view/localApplications/index.vue')
    },
    {
      path: '/logs',
      component: () => import('../view/logs/index.vue')
    },
    {
      path: '/about',
      component: () => import('../view/about/index.vue')
    }
  ]
})

export default router
