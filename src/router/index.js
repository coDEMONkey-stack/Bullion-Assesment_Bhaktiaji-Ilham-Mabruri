import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { 
      requiresGuest: true,
      title: 'Login Admin'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register.vue'),
    meta: { 
      requiresGuest: true,
      title: 'Daftar'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue'),
    meta: { 
      requiresAuth: true,
      title: 'Dashboard - User Aktif'
    }
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated

  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ 
      name: 'Login', 
      query: { redirect: to.fullPath } 
    })
    return
  }

  if (to.meta.requiresGuest && isAuthenticated) {
    next({ name: 'Dashboard' })
    return
  }

  next()
})

export default router

