import axios from 'axios'
import { getActivePinia } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const BASE_URL = 'https://api-test.bullionecosystem.com/api/v1/'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  (config) => {
    const pinia = getActivePinia()
    if (pinia) {
      const authStore = useAuthStore()
      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
      }
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const pinia = getActivePinia()
      if (pinia) {
        const authStore = useAuthStore()
        authStore.clearAuth()
      } else {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }

      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api

