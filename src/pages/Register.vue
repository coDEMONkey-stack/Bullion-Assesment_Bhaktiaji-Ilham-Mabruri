<template>
  <div class="min-h-screen flex overflow-hidden">
    <div class="hidden md:flex md:w-1/3 fixed left-0 top-0 bottom-0 overflow-hidden" style="background-color: #2E74B2;">
      
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

    <div class="flex-1 bg-white p-4 md:p-8 overflow-y-auto md:ml-[33.333333%]">
      <Transition
        appear
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        class="max-w-4xl mx-auto"
      >
        <div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Daftar</h2>
        
        <form @submit.prevent="handleRegister" class="space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                Nama Depan <span class="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                placeholder="Masukkan nama depan"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.firstName }"
              />
              <p v-if="errors.firstName" class="mt-1 text-sm text-red-500">{{ errors.firstName }}</p>
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                Nama Belakang <span class="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                placeholder="Masukkan nama belakang"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                :class="{ 'border-red-500': errors.lastName }"
              />
              <p v-if="errors.lastName" class="mt-1 text-sm text-red-500">{{ errors.lastName }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-700 mb-2">
                Jenis Kelamin <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select
                  id="gender"
                  v-model="form.gender"
                  class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-white"
                  :class="{ 'border-red-500': errors.gender }"
                >
                  <option value="">Pilih jenis kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <font-awesome-icon icon="chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style="color: #FD5725;" />
              </div>
              <p v-if="errors.gender" class="mt-1 text-sm text-red-500">{{ errors.gender }}</p>
            </div>

            <div>
              <label for="dateOfBirth" class="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Lahir <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="dateOfBirth"
                  v-model="form.dateOfBirth"
                  type="date"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all pr-12"
                  :class="{ 'border-red-500': errors.dateOfBirth }"
                />
                <font-awesome-icon icon="calendar-days" class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style="color: #FD5725;" />
              </div>
              <p v-if="errors.dateOfBirth" class="mt-1 text-sm text-red-500">{{ errors.dateOfBirth }}</p>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Masukkan email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
          </div>

          <div>
            <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-2">
              No. Handphone <span class="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              v-model="form.phoneNumber"
              type="tel"
              placeholder="Masukkan no handphone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.phoneNumber }"
            />
            <p v-if="errors.phoneNumber" class="mt-1 text-sm text-red-500">{{ errors.phoneNumber }}</p>
          </div>

          <div>
            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">
              Alamat <span class="text-red-500">*</span>
            </label>
            <input
              id="address"
              v-model="form.address"
              type="text"
              placeholder="Masukkan alamat"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.address }"
            />
            <p v-if="errors.address" class="mt-1 text-sm text-red-500">{{ errors.address }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all pr-12"
                  :class="{ 'border-red-500': errors.password }"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <font-awesome-icon v-if="!showPassword" icon="eye" style="color: #FD5725;" />
                  <font-awesome-icon v-else icon="eye-slash" style="color: #FD5725;" />
                </button>
              </div>
              <p v-if="errors.password" class="mt-1 text-sm text-red-500">{{ errors.password }}</p>
            </div>

            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                Konfirmasi Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  placeholder="Konfirmasi password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all pr-12"
                  :class="{ 'border-red-500': errors.confirmPassword }"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <font-awesome-icon v-if="!showConfirmPassword" icon="eye" style="color: #FD5725;" />
                  <font-awesome-icon v-else icon="eye-slash" style="color: #FD5725;" />
                </button>
              </div>
              <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-500">{{ errors.confirmPassword }}</p>
            </div>
          </div>

          <div>
            <label for="photoProfile" class="block text-sm font-medium text-gray-700 mb-2">
              Foto Profil <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <input
                id="photoProfile"
                type="file"
                accept="image/jpeg,image/jpg"
                @change="handleFileChange"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-white hover:file:bg-secondary-dark cursor-pointer"
                :class="{ 'border-red-500': errors.photoProfile }"
              />
              <font-awesome-icon icon="cloud-arrow-up" class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style="color: #FD5725;" />
            </div>
            <p v-if="errors.photoProfile" class="mt-1 text-sm text-red-500">{{ errors.photoProfile }}</p>
            <p v-if="selectedFile" class="mt-2 text-sm text-gray-600">{{ selectedFile.name }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full text-white py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] hover:opacity-90"
            style="background-color: #2E74B2;"
          >
            <span v-if="!loading">Tambah</span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </span>
          </button>

          <p class="text-center text-sm text-gray-600">
            Sudah punya akun?
            <router-link to="/login" class="text-secondary font-semibold hover:underline">
              Login di sini
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
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { authService } from '@/services/authService'

const router = useRouter()
const toast = useToast()

const form = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  address: '',
  password: '',
  confirmPassword: '',
  photoProfile: null
})

const errors = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  address: '',
  password: '',
  confirmPassword: '',
  photoProfile: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const selectedFile = ref(null)
const loading = ref(false)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      errors.photoProfile = 'Ukuran file maksimal 5MB'
      return
    }

    if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
      errors.photoProfile = 'Format file harus JPG/JPEG'
      return
    }
    
    form.photoProfile = file
    selectedFile.value = file
    errors.photoProfile = ''
  }
}

const validateForm = () => {
  let isValid = true

  Object.keys(errors).forEach(key => errors[key] = '')

  if (!form.firstName.trim()) {
    errors.firstName = 'Nama depan wajib diisi'
    isValid = false
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Nama belakang wajib diisi'
    isValid = false
  }

  if (!form.gender) {
    errors.gender = 'Jenis kelamin wajib diisi'
    isValid = false
  }

  if (!form.dateOfBirth) {
    errors.dateOfBirth = 'Tanggal lahir wajib diisi'
    isValid = false
  }

  if (!form.email) {
    errors.email = 'Email wajib diisi'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Format email tidak valid'
    isValid = false
  }

  if (!form.phoneNumber.trim()) {
    errors.phoneNumber = 'No. handphone wajib diisi'
    isValid = false
  }

  if (!form.address.trim()) {
    errors.address = 'Alamat wajib diisi'
    isValid = false
  }

  if (!form.password) {
    errors.password = 'Password wajib diisi'
    isValid = false
  } else {
    if (form.password.length < 8) {
      errors.password = 'Password minimal 8 karakter'
      isValid = false
    } else if (!/[a-zA-Z]/.test(form.password)) {
      errors.password = 'Password harus mengandung huruf'
      isValid = false
    } else if (!/[0-9]/.test(form.password)) {
      errors.password = 'Password harus mengandung angka'
      isValid = false
    } else if (!/[A-Z]/.test(form.password)) {
      errors.password = 'Password harus mengandung minimal 1 huruf kapital'
      isValid = false
    }
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Konfirmasi password wajib diisi'
    isValid = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Konfirmasi password tidak sama dengan password'
    isValid = false
  }

  if (!form.photoProfile) {
    errors.photoProfile = 'Foto profil wajib diisi'
    isValid = false
  }

  return isValid
}

const handleRegister = async () => {
  if (!validateForm()) {
    toast.error('Mohon perbaiki kesalahan pada form')
    return
  }

  loading.value = true
  try {
    const response = await authService.register(form)
    
    if (response.token || response.success) {
      toast.success('Registrasi berhasil!')
      router.push('/login')
    } else {
      toast.error(response.message || 'Registrasi gagal')
    }
  } catch (error) {
    toast.error(error.response?.data?.message || 'Terjadi kesalahan saat registrasi')
  } finally {
    loading.value = false
  }
}
</script>

