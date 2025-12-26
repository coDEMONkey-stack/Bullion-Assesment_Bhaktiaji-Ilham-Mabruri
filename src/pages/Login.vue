<template>
  <div class="min-h-screen flex overflow-hidden">
    <div class="hidden md:flex md:w-1/3 fixed left-0 top-0 bottom-0 overflow-hidden" style="background-color: #FD5725;">
      
      <img 
        src="@assets/logo/particle-logomark.png" 
        alt="Particle Background"
        class="absolute top-0 left-0 w-80 h-80 opacity-30 object-contain pointer-events-none"
      />

      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="100" r="3" fill="white" opacity="0.6"/>
          <circle cx="150" cy="150" r="2" fill="white" opacity="0.4"/>
          <circle cx="80" cy="250" r="2.5" fill="white" opacity="0.5"/>
          <circle cx="200" cy="200" r="2" fill="white" opacity="0.4"/>
          <circle cx="120" cy="350" r="3" fill="white" opacity="0.6"/>
          <circle cx="250" cy="300" r="2" fill="white" opacity="0.4"/>
          <circle cx="180" cy="450" r="2.5" fill="white" opacity="0.5"/>
          <circle cx="300" cy="400" r="2" fill="white" opacity="0.4"/>
          <circle cx="100" cy="550" r="3" fill="white" opacity="0.6"/>
          <circle cx="220" cy="500" r="2" fill="white" opacity="0.4"/>
          <line x1="50" y1="100" x2="150" y2="150" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="150" y1="150" x2="80" y2="250" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="80" y1="250" x2="200" y2="200" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="200" y1="200" x2="120" y2="350" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="120" y1="350" x2="250" y2="300" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="250" y1="300" x2="180" y2="450" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="180" y1="450" x2="300" y2="400" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="300" y1="400" x2="100" y2="550" stroke="white" stroke-width="1" opacity="0.3"/>
          <line x1="100" y1="550" x2="220" y2="500" stroke="white" stroke-width="1" opacity="0.3"/>
        </svg>
      </div>

      <div class="relative z-10 p-8 h-full flex flex-col">
        <div class="relative">
          <img 
            src="@assets/logo/logo-bei.svg" 
            alt="Bullion Ecosystem Logo" 
            class="h-12 mb-8 w-auto relative z-10"
            onerror="this.style.display='none'"
          />
        </div>
        
      </div>
    </div>

    <div class="flex-1 flex items-center justify-center bg-white p-4 md:p-8 md:ml-[33.333333%]">
      <Transition
        appear
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        class="w-full max-w-md"
      >
        <div>
          <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Login Admin</h2>
          
          <form @submit.prevent="handleLogin" class="space-y-6">
            
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Masukkan email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
                @blur="validateEmail"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>

            <div>
              <label for="password" class="block text-sm font-semibold text-gray-900 mb-2">
                Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none pr-12"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.password }"
                  @blur="validatePassword"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  tabindex="-1"
                >
                  <font-awesome-icon v-if="!showPassword" icon="eye" style="color: #FD5725;" />
                  <font-awesome-icon v-else icon="eye-slash" style="color: #FD5725;" />
                </button>
              </div>
              <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              <span v-if="!loading">Masuk</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </span>
            </button>

            <p class="text-center text-sm text-gray-600 mt-6">
              Belum punya akun?
              <router-link 
                to="/register" 
                class="text-primary font-semibold hover:underline ml-1 transition-colors"
              >
                Daftar di sini
              </router-link>
            </p>
          </form>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Transition } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '@/stores/auth'
import { authService } from '@/services/authService'

const router = useRouter()
const route = useRoute()
const toast = useToast()
const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const showPassword = ref(false)
const loading = ref(false)

const validateEmail = () => {
  errors.email = ''
  if (!form.email) {
    errors.email = 'Email wajib diisi'
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format email tidak valid'
    return false
  }
  return true
}

const validatePassword = () => {
  errors.password = ''
  if (!form.password) {
    errors.password = 'Password wajib diisi'
    return false
  }
  if (form.password.length < 8) {
    errors.password = 'Password minimal 8 karakter'
    return false
  }
  return true
}

const validateForm = () => {
  const emailValid = validateEmail()
  const passwordValid = validatePassword()
  return emailValid && passwordValid
}

const handleLogin = async () => {
  if (!validateForm()) {
    toast.error('Mohon perbaiki kesalahan pada form')
    return
  }

  loading.value = true
  try {
    const response = await authService.login(form.email, form.password)

    if (response.data && response.data.token) {
      authStore.setAuth(response.data.token, {
        name: response.data.name,
        email: response.data.email
      })
      toast.success(response.message || 'Login berhasil!')

      const redirect = route.query.redirect || '/dashboard'
      router.push(redirect)
    } else {
      toast.error(response.message || 'Login gagal')
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Terjadi kesalahan saat login'
    toast.error(errorMessage)

    if (error.response?.status === 401) {
      form.password = ''
    }
  } finally {
    loading.value = false
  }
}
</script>
