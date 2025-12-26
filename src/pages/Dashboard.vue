<template>
  <div class="min-h-screen bg-gray-50 flex">
    
    <aside 
      :class="[
        'bg-white shadow-xl fixed h-full z-30 transition-all duration-300 ease-in-out',
        isSidebarCollapsed ? 'w-20' : 'w-64',
        'hidden md:block'
      ]"
    >
      <div class="p-4 h-full flex flex-col">
        
        <div class="flex items-center justify-between mb-6">
          <Transition
            enter-active-class="transition-all duration-300 ease-in-out"
            enter-from-class="opacity-0 -translate-x-2"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-all duration-300 ease-in-out"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-2"
          >
            <div v-if="!isSidebarCollapsed" class="flex items-center justify-center flex-1">
              <img src="@assets/logo/logo-bei.svg" alt="BULLION ecosystem Logo" class="h-12 w-auto brightness-0" />
            </div>
            <div v-else class="flex justify-center w-full">
              <img src="@assets/logo/logo-bei.svg" alt="BULLION ecosystem Logo" class="h-10 w-auto brightness-0" />
            </div>
          </Transition>

          <button
            @click="isSidebarCollapsed = !isSidebarCollapsed"
            class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 flex-shrink-0"
            :title="isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
          >
            <font-awesome-icon v-if="!isSidebarCollapsed" icon="chevron-left" class="transition-transform" style="color: #FD5725;" />
            <font-awesome-icon v-else icon="chevron-right" class="transition-transform" style="color: #FD5725;" />
          </button>
        </div>

        <nav class="flex-1 space-y-1">
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg font-medium shadow-sm hover:bg-primary-dark transition-all duration-200 group"
            :class="isSidebarCollapsed ? 'justify-center' : ''"
          >
            <font-awesome-icon icon="users" class="flex-shrink-0" style="color: white;" />
            <Transition
              enter-active-class="transition-all duration-300 ease-in-out"
              enter-from-class="opacity-0 -translate-x-2"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-2"
            >
              <span v-if="!isSidebarCollapsed" class="whitespace-nowrap">User Aktif</span>
            </Transition>
          </a>
          
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
            :class="isSidebarCollapsed ? 'justify-center' : ''"
            :title="isSidebarCollapsed ? 'Menu 2' : ''"
          >
            <font-awesome-icon icon="th-large" class="flex-shrink-0 transition-colors fa-icon" style="color: #FD5725;" />
            <Transition
              enter-active-class="transition-all duration-300 ease-in-out"
              enter-from-class="opacity-0 -translate-x-2"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-2"
            >
              <span v-if="!isSidebarCollapsed" class="whitespace-nowrap">Menu 2</span>
            </Transition>
          </a>
          
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
            :class="isSidebarCollapsed ? 'justify-center' : ''"
            :title="isSidebarCollapsed ? 'Menu 3' : ''"
          >
            <font-awesome-icon icon="chart-bar" class="flex-shrink-0 transition-colors fa-icon" style="color: #FD5725;" />
            <Transition
              enter-active-class="transition-all duration-300 ease-in-out"
              enter-from-class="opacity-0 -translate-x-2"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-2"
            >
              <span v-if="!isSidebarCollapsed" class="whitespace-nowrap">Menu 3</span>
            </Transition>
          </a>
          
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
            :class="isSidebarCollapsed ? 'justify-center' : ''"
            :title="isSidebarCollapsed ? 'Menu 4' : ''"
          >
            <font-awesome-icon icon="file-alt" class="flex-shrink-0 transition-colors fa-icon" style="color: #FD5725;" />
            <Transition
              enter-active-class="transition-all duration-300 ease-in-out"
              enter-from-class="opacity-0 -translate-x-2"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-2"
            >
              <span v-if="!isSidebarCollapsed" class="whitespace-nowrap">Menu 4</span>
            </Transition>
          </a>
          
          <a
            href="#"
            class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
            :class="isSidebarCollapsed ? 'justify-center' : ''"
            :title="isSidebarCollapsed ? 'Menu 5' : ''"
          >
            <font-awesome-icon icon="cog" class="flex-shrink-0 transition-colors fa-icon" style="color: #FD5725;" />
            <Transition
              enter-active-class="transition-all duration-300 ease-in-out"
              enter-from-class="opacity-0 -translate-x-2"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition-all duration-300 ease-in-out"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 -translate-x-2"
            >
              <span v-if="!isSidebarCollapsed" class="whitespace-nowrap">Menu 5</span>
            </Transition>
          </a>
        </nav>
      </div>
    </aside>

    <div 
      :class="[
        'flex-1 flex flex-col transition-all duration-300 ease-in-out',
        'md:ml-0',
        isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
      ]"
    >
      <div class="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm border-b border-gray-200 z-20 px-4 py-3 flex items-center justify-between">
        <img src="@assets/logo/logo-bei.svg" alt="BULLION ecosystem Logo" class="h-8 w-auto brightness-0" />
        <button
          @click="showMobileMenu = !showMobileMenu"
          class="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <font-awesome-icon icon="bars" style="color: #FD5725;" />
        </button>
      </div>
      
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
      >
        <div
          v-if="showMobileMenu"
          class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          @click="showMobileMenu = false"
        >
          <div
            class="bg-white w-64 h-full shadow-xl overflow-y-auto"
            @click.stop
          >
            <div class="p-4 flex items-center justify-between border-b">
              <img src="@assets/logo/logo-bei.svg" alt="BULLION ecosystem Logo" class="h-10 w-auto brightness-0" />
              <button
                @click="showMobileMenu = false"
                class="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <font-awesome-icon icon="xmark" style="color: #FD5725;" />
              </button>
            </div>
            <nav class="p-4 space-y-1">
              <a href="#" class="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg font-medium">
                <font-awesome-icon icon="users" style="color: white;" />
                <span>User Aktif</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <font-awesome-icon icon="th-large" style="color: #FD5725;" />
                <span>Menu 2</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <font-awesome-icon icon="chart-bar" style="color: #FD5725;" />
                <span>Menu 3</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <font-awesome-icon icon="file-alt" style="color: #FD5725;" />
                <span>Menu 4</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <font-awesome-icon icon="cog" style="color: #FD5725;" />
                <span>Menu 5</span>
              </a>
            </nav>
          </div>
        </div>
      </Transition>
      
      <header class="bg-white shadow-sm border-b border-gray-200 px-4 md:px-8 py-4 mt-14 md:mt-0">
        <div class="flex justify-end items-center">
          
          <div class="relative">
            <button
              @click="showUserDropdown = !showUserDropdown"
              class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                {{ userInitials }}
              </div>
              <span class="text-sm font-medium text-gray-700">{{ userName }}</span>
              <font-awesome-icon icon="chevron-down" style="color: #FD5725;" />
            </button>

            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 translate-y-2"
            >
              <div
                v-if="showUserDropdown"
                class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                @click.stop
              >
                <button
                  @click="handleLogout"
                  class="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <font-awesome-icon icon="sign-out-alt" style="color: #374151;" />
                  Logout
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </header>

      <main class="flex-1 p-4 md:p-8 overflow-y-auto space-y-6">
        <div class="bg-white rounded-lg shadow px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 class="text-xl md:text-2xl font-bold text-gray-900">User Aktif</h1>
          <button
            @click="$router.push('/register')"
            class="w-full sm:w-auto bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            Tambah User
          </button>
        </div>

        <div class="bg-white rounded-lg shadow">
          <div v-if="deleting" class="py-20 flex items-center justify-center">
            <div class="flex flex-col items-center gap-4">
              <svg class="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p class="text-gray-600 font-medium">Menghapus user...</p>
            </div>
          </div>
          <div v-else-if="updating" class="py-20 flex items-center justify-center">
            <div class="flex flex-col items-center gap-4">
              <svg class="animate-spin h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p class="text-gray-600 font-medium">Memperbarui user...</p>
            </div>
          </div>
          <div v-else>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px]">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Account ID</th>
                    <th class="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Name</th>
                    <th class="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700 hidden md:table-cell">Date</th>
                    <th class="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700 hidden sm:table-cell">Status</th>
                    <th class="px-3 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="(user, index) in paginatedUsers"
                    :key="user.id || user._id"
                    :class="index % 2 === 0 ? 'bg-white' : 'bg-orange-50'"
                    class="hover:bg-gray-50 transition-colors"
                  >
                    <td class="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">
                      #{{ user.id || user._id || user.account_id || 'N/A' }}
                    </td>
                    <td class="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">
                      {{ getUserName(user) }}
                    </td>
                    <td class="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600 hidden md:table-cell">
                      {{ formatDateCached(user.created_at || user.date_of_birth || user.date) }}
                    </td>
                    <td class="px-3 md:px-6 py-3 md:py-4 hidden sm:table-cell">
                      <span class="inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Registered
                      </span>
                    </td>
                    <td class="px-3 md:px-6 py-3 md:py-4">
                      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                        <button
                          @click="openViewModal(user)"
                          class="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors text-xs md:text-sm font-medium"
                        >
                          <font-awesome-icon icon="eye" style="color: #FD5725;" class="text-xs" />
                          <span class="hidden sm:inline">Lihat</span>
                        </button>
                        <button
                          @click="openEditModal(user)"
                          class="flex items-center gap-1 text-primary hover:text-primary-dark transition-colors text-xs md:text-sm font-medium"
                        >
                          <font-awesome-icon :icon="['far', 'pen-to-square']" style="color: #FD5725;" class="text-xs" />
                          <span class="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          @click="handleDeleteUser(user)"
                          class="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors text-xs md:text-sm font-medium"
                        >
                          <font-awesome-icon icon="trash" style="color: #DC2626;" class="text-xs" />
                          <span class="hidden sm:inline">Hapus</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="users.length === 0 && !loading">
                    <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                      <p>Tidak ada data user</p>
                    </td>
                  </tr>
                  <tr v-if="loading">
                    <td colspan="5" class="px-6 py-12 text-center">
                      <div class="flex items-center justify-center">
                        <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="users.length > 0" class="px-4 md:px-6 py-4 border-t border-gray-200 flex flex-wrap justify-center md:justify-end items-center gap-2">
            <button
              @click="currentPage > 1 && currentPage--"
              :disabled="currentPage === 1"
              class="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              :class="currentPage === page ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'"
              class="px-3 md:px-4 py-2 text-xs md:text-sm font-medium border rounded-lg transition-colors"
            >
              {{ page }}
            </button>
            <button
              @click="currentPage < totalPages && currentPage++"
              :disabled="currentPage === totalPages"
              class="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
          </div>
        </div>
      </main>
    </div>

    <ViewUserModal
      v-if="showViewModal"
      :user="selectedUser"
      @close="closeViewModal"
      @edit="openEditModal"
    />

    <EditUserModal
      v-if="showEditModal"
      :user="selectedUser"
      @close="closeEditModal"
      @updated="handleUserUpdated"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Transition } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '@/stores/auth'
import { userService } from '@/services/userService'
import { formatDate } from '@/utils/dateFormatter'
import ViewUserModal from '@/components/ViewUserModal.vue'
import EditUserModal from '@/components/EditUserModal.vue'

const router = useRouter()
const toast = useToast()
const authStore = useAuthStore()

const users = ref([])
const usersCache = ref([])
const loading = ref(false)
const deleting = ref(false)
const updating = ref(false)
const currentPage = ref(1)
const itemsPerPage = 10
const showViewModal = ref(false)
const showEditModal = ref(false)
const selectedUser = ref(null)
const showUserDropdown = ref(false)
const isSidebarCollapsed = ref(false)
const showMobileMenu = ref(false)

const userDetailCache = new Map()
const formatDateCache = new Map()
const getUserNameCache = new Map()

const userName = computed(() => {
  const user = authStore.user
  if (user?.name) return user.name
  if (user?.first_name && user?.last_name) {
    return `${user.first_name} ${user.last_name}`
  }
  if (user?.email) return user.email.split('@')[0]
  return 'User'
})

const userInitials = computed(() => {
  const name = userName.value
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
})

const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return users.value.slice(start, end)
})

const getUserName = (user) => {
  const userId = user.id || user._id || user.account_id
  if (userId && getUserNameCache.has(userId)) {
    return getUserNameCache.get(userId)
  }
  
  let name = 'N/A'
  if (user.first_name && user.last_name) {
    name = `${user.first_name} ${user.last_name}`
  } else if (user.name) {
    name = user.name
  }
  
  if (userId) {
    getUserNameCache.set(userId, name)
  }
  return name
}

const formatDateCached = (dateString) => {
  if (!dateString) return 'N/A'
  if (formatDateCache.has(dateString)) {
    return formatDateCache.get(dateString)
  }
  
  const formatted = formatDate(dateString)
  formatDateCache.set(dateString, formatted)
  return formatted
}

const fetchUsers = async (useCache = true) => {
  if (useCache && usersCache.value.length > 0) {
    users.value = usersCache.value
    return
  }
  
  loading.value = true
  try {
    const response = await userService.getUsers(0, 1000)
    
    let userData = []
    if (response && response.data && Array.isArray(response.data)) {
      userData = response.data
    } else if (response && Array.isArray(response)) {
      userData = response
    }
    
    userData.forEach(user => {
      const userId = user.id || user._id || user.account_id
      if (userId) {
        const name = user.first_name && user.last_name 
          ? `${user.first_name} ${user.last_name}` 
          : (user.name || 'N/A')
        getUserNameCache.set(userId, name)
        
        const dateStr = user.created_at || user.date_of_birth || user.date
        if (dateStr && !formatDateCache.has(dateStr)) {
          formatDateCache.set(dateStr, formatDate(dateStr))
        }
      }
    })
    
    userData.sort((a, b) => {
      const getDate = (user) => {
        if (user.created_at) {
          return new Date(user.created_at).getTime()
        }
        if (user.date) {
          return new Date(user.date).getTime()
        }
        if (user.date_of_birth) {
          return new Date(user.date_of_birth).getTime()
        }
        return 0
      }
      
      const dateA = getDate(a)
      const dateB = getDate(b)
      
      return dateB - dateA
    })
    
    users.value = userData
    usersCache.value = userData
  } catch (error) {
    if (error.response?.status === 404) {
      const errorMessage = 'Endpoint users tidak ditemukan. Pastikan endpoint API sudah benar atau hubungi administrator.'
      toast.error(errorMessage)
    } else if (error.response?.status === 401) {
      toast.error('Session expired. Silakan login kembali.')
      authStore.clearAuth()
      router.push('/login')
    } else if (error.response?.status === 500) {
      const serverMessage = error.response?.data?.message || error.response?.data?.error
      const errorMessage = serverMessage || 'Server error. Pastikan Anda sudah login dengan benar atau hubungi administrator.'
      toast.error(errorMessage)
    } else {
      const errorMessage = error.response?.data?.message || error.message || 'Gagal memuat daftar user'
      toast.error(errorMessage)
    }
    
    users.value = []
    usersCache.value = []
  } finally {
    loading.value = false
  }
}

const openViewModal = async (user) => {
  const userId = user._id || user.id || user.account_id
  
  if (userId && userDetailCache.has(userId)) {
    selectedUser.value = userDetailCache.get(userId)
    showViewModal.value = true
    return
  }
  
  try {
    if (userId) {
      const response = await userService.getUserDetail(userId)
      
      if (response && response.data) {
        selectedUser.value = response.data
        userDetailCache.set(userId, response.data)
      } else if (response && !response.iserror) {
        selectedUser.value = response
        userDetailCache.set(userId, response)
      } else {
        selectedUser.value = user
      }
    } else {
      selectedUser.value = user
    }
    showViewModal.value = true
  } catch (error) {
    const errorData = error.response?.data
    const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || error.message || 'Gagal memuat detail user'
    toast.error(errorMessage)
    
    selectedUser.value = user
    showViewModal.value = true
  }
}

const closeViewModal = () => {
  showViewModal.value = false
  selectedUser.value = null
}

const openEditModal = async (user) => {
  const userId = user._id || user.id || user.account_id
  
  if (userId && userDetailCache.has(userId)) {
    selectedUser.value = userDetailCache.get(userId)
    showViewModal.value = false
    showEditModal.value = true
    return
  }
  
  try {
    if (userId) {
      const response = await userService.getUserDetail(userId)
      if (response && response.data) {
        selectedUser.value = response.data
        userDetailCache.set(userId, response.data)
      } else if (response && !response.iserror) {
        selectedUser.value = response
        userDetailCache.set(userId, response)
      } else {
        selectedUser.value = user
      }
    } else {
      selectedUser.value = user
    }
    showViewModal.value = false
    showEditModal.value = true
  } catch (error) {
    const errorData = error.response?.data
    const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || error.message || 'Gagal memuat detail user'
    toast.error(errorMessage)
    selectedUser.value = user
    showViewModal.value = false
    showEditModal.value = true
  }
}

const closeEditModal = () => {
  showEditModal.value = false
  selectedUser.value = null
}

const handleUserUpdated = async () => {
  const userId = selectedUser.value?._id || selectedUser.value?.id || selectedUser.value?.account_id
  if (userId) {
    userDetailCache.delete(userId)
    getUserNameCache.delete(userId)
  }
  closeEditModal()
  updating.value = true
  try {
    await fetchUsers(false)
    updating.value = false
    toast.success('User berhasil diperbarui!')
  } catch (error) {
    updating.value = false
  }
}

const handleDeleteUser = async (user) => {
  const userId = user._id || user.id || user.account_id
  if (!userId) {
    toast.error('ID user tidak ditemukan')
    return
  }

  const userName = getUserName(user)
  const confirmed = confirm(`Apakah Anda yakin ingin menghapus user "${userName}"?`)
  
  if (!confirmed) {
    return
  }

  deleting.value = true
  try {
    await userService.deleteUser(userId)
    if (userId) {
      userDetailCache.delete(userId)
      getUserNameCache.delete(userId)
    }
    const index = users.value.findIndex(u => (u._id || u.id || u.account_id) === userId)
    if (index !== -1) {
      users.value.splice(index, 1)
      usersCache.value = [...users.value]
    } else {
      await fetchUsers(false)
    }
    deleting.value = false
    toast.success('User berhasil dihapus')
  } catch (error) {
    deleting.value = false
    const errorMessage = error.response?.data?.message || error.message || 'Gagal menghapus user'
    toast.error(errorMessage)
  }
}

const handleLogout = () => {
  showUserDropdown.value = false
  authStore.clearAuth()
  toast.success('Logout berhasil')
  router.push('/login')
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    showUserDropdown.value = false
  }
}

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push({ name: 'Login' })
    return
  }
  fetchUsers()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
