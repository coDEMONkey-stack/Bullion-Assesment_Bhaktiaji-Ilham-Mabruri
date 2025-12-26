<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click.self="handleClose"
      >
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="show"
            class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
      <div class="p-4 md:p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Lihat User</h2>
          <button
            @click="handleClose"
            class="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            <font-awesome-icon icon="xmark" style="color: white;" />
          </button>
        </div>

        <div class="mb-6 text-center">
          <label class="block text-sm font-medium text-gray-700 mb-3">Foto Profil</label>
          <div class="flex justify-center">
            <img
              v-if="user.gender === 'male'"
              src="@assets/icon/male.svg"
              alt="Male"
              class="w-32 h-32 rounded-full object-contain p-4 border-4 border-gray-200 bg-gray-50"
            />
            <img
              v-else-if="user.gender === 'female'"
              src="@assets/icon/female.svg"
              alt="Female"
              class="w-32 h-32 rounded-full object-contain p-4 border-4 border-gray-200 bg-gray-50"
            />
            <div
              v-else
              class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <font-awesome-icon icon="user" style="color: #FD5725; font-size: 48px;" />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
            <p class="text-gray-900 font-medium">{{ user.first_name || (user.name ? user.name.split(' ')[0] : 'N/A') }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
            <p class="text-gray-900 font-medium">{{ user.last_name || (user.name ? user.name.split(' ').slice(1).join(' ') : 'N/A') }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
            <p class="text-gray-900 font-medium">{{ formatGender(user.gender) || 'N/A' }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
            <p class="text-gray-900 font-medium">{{ formatDateLong(user.date_of_birth) }}</p>
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <p class="text-gray-900 font-medium">{{ user.email || 'N/A' }}</p>
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">No. Handphone</label>
            <p class="text-gray-900 font-medium">{{ user.phone || user.phone_number || 'N/A' }}</p>
          </div>

          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
            <p class="text-gray-900 font-medium">{{ user.address || 'N/A' }}</p>
          </div>
        </div>

        <div class="mt-8">
          <button
            @click="handleEdit"
            class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Edit
          </button>
        </div>
      </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { Transition } from 'vue'
import { formatDateLong } from '@/utils/dateFormatter'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'edit'])

const show = ref(true)

watch(() => props.user, () => {
  show.value = true
})

const handleEdit = () => {
  emit('edit', props.user)
}

const handleClose = () => {
  show.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const formatGender = (gender) => {
  if (!gender) return null
  if (gender === 'male') return 'Laki-laki'
  if (gender === 'female') return 'Perempuan'
  return gender
}
</script>

