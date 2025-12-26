<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click.self="handleClose"
      >
        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="show"
            class="bg-white rounded-lg shadow-xl max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
      <div class="p-4 md:p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Edit User</h2>
          <button
            @click="handleClose"
            class="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            <font-awesome-icon icon="xmark" style="color: white;" />
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                Nama Depan <span class="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                  class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
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
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              :class="{ 'border-red-500': errors.address }"
            />
            <p v-if="errors.address" class="mt-1 text-sm text-red-500">{{ errors.address }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password baru"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
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
                Konfirmasi Password
              </label>
              <div class="relative">
                <input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  placeholder="Konfirmasi password baru"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all pr-12"
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
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Foto Profil
            </label>
            <div class="mb-3 flex justify-center">
              <div class="w-24 h-24 rounded-full border-2 border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden p-4">
                <img
                  v-if="form.gender === 'Laki-laki' || (props.user?.gender === 'male' && !form.gender)"
                  src="@assets/icon/male.svg"
                  alt="Male"
                  class="w-full h-full object-contain"
                  style="max-width: 100%; max-height: 100%;"
                />
                <img
                  v-else-if="form.gender === 'Perempuan' || (props.user?.gender === 'female' && !form.gender)"
                  src="@assets/icon/female.svg"
                  alt="Female"
                  class="w-full h-full object-contain"
                  style="max-width: 100%; max-height: 100%;"
                />
                <font-awesome-icon
                  v-else
                  icon="user"
                  style="color: #FD5725; font-size: 32px;"
                />
              </div>
            </div>
          </div>

          <div class="mt-8">
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span v-if="!loading">Simpan</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Menyimpan...
              </span>
            </button>
          </div>
        </form>
      </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { Transition } from 'vue'
import { useToast } from 'vue-toastification'
import { userService } from '@/services/userService'
import { formatDateForInput } from '@/utils/dateFormatter'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'updated'])

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
  confirmPassword: ''
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
  confirmPassword: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const show = ref(true)

const loadUserData = () => {
  if (!props.user) return
  
  const user = props.user
  
  if (user.first_name && user.last_name) {
    form.firstName = user.first_name
    form.lastName = user.last_name
  } else if (user.name) {
    const nameParts = user.name.split(' ')
    form.firstName = nameParts[0] || ''
    form.lastName = nameParts.slice(1).join(' ') || ''
  } else {
    form.firstName = user.firstName || ''
    form.lastName = user.lastName || ''
  }
  
  const userGender = user.gender || ''
  if (userGender === 'male') {
    form.gender = 'Laki-laki'
  } else if (userGender === 'female') {
    form.gender = 'Perempuan'
  } else if (userGender === 'Laki-laki' || userGender === 'Perempuan') {
    form.gender = userGender
  } else {
    form.gender = ''
  }
  
  form.dateOfBirth = formatDateForInput(user.date_of_birth || user.dateOfBirth)
  form.email = user.email || ''
  form.phoneNumber = user.phone || user.phone_number || user.phoneNumber || ''
  form.address = user.address || ''
  
  form.password = ''
  form.confirmPassword = ''
}

watch(() => props.user, () => {
  show.value = true
  loadUserData()
}, { immediate: true, deep: true })

onMounted(() => {
  loadUserData()
})

const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64String = reader.result.split(',')[1]
      resolve(base64String)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
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

  if (form.password) {
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

    if (!form.confirmPassword) {
      errors.confirmPassword = 'Konfirmasi password wajib diisi'
      isValid = false
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Konfirmasi password tidak sama dengan password'
      isValid = false
    }
  }

  return isValid
}

const handleClose = () => {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const handleSubmit = async () => {
  if (!validateForm()) {
    toast.error('Mohon perbaiki kesalahan pada form')
    return
  }

  loading.value = true
  try {
    const userId = props.user._id || props.user.id || props.user.account_id
    if (!userId) {
      toast.error('User ID tidak ditemukan')
      loading.value = false
      return
    }
    
    const response = await userService.updateUser(userId, form)

    if (response) {
      const isSuccess = response.status === 200 || 
                       response.status === 'success' || 
                       (!response.iserror && response.status !== 'error') ||
                       (response.data && !response.iserror)
      
      if (isSuccess) {
        loading.value = false
        emit('updated')
        handleClose()
      } else {
        loading.value = false
        toast.error(response.message || response.err_message || response.data?.message || 'Gagal memperbarui user')
      }
    } else {
      loading.value = false
      emit('updated')
      handleClose()
    }
  } catch (error) {
    console.error('Update user error:', error)
    loading.value = false
    const errorData = error.response?.data || error
    const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || error.message || 'Gagal memperbarui user'
    toast.error(errorMessage)
  }
}
</script>

