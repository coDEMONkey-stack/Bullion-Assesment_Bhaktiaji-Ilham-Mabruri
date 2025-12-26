import { reactive } from 'vue'

export function useFormValidation() {
  const createErrors = (fields) => {
    const errors = reactive({})
    fields.forEach(field => {
      errors[field] = ''
    })
    return errors
  }

  const validateEmail = (email) => {
    if (!email) {
      return 'Email wajib diisi'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Format email tidak valid'
    }
    return ''
  }

  const validatePassword = (password, options = {}) => {
    const { minLength = 8, requireAlphabet = false, requireNumber = false, requireCapital = false } = options

    if (!password) {
      return 'Password wajib diisi'
    }
    if (password.length < minLength) {
      return `Password minimal ${minLength} karakter`
    }
    if (requireAlphabet && !/[a-zA-Z]/.test(password)) {
      return 'Password harus mengandung huruf'
    }
    if (requireNumber && !/[0-9]/.test(password)) {
      return 'Password harus mengandung angka'
    }
    if (requireCapital && !/[A-Z]/.test(password)) {
      return 'Password harus mengandung minimal 1 huruf kapital'
    }
    return ''
  }

  const validateRequired = (value, fieldName) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return `${fieldName} wajib diisi`
    }
    return ''
  }

  const validateFile = (file, options = {}) => {
    const { maxSize = 5 * 1024 * 1024, allowedTypes = ['image/jpeg', 'image/jpg'] } = options

    if (!file) {
      return 'File wajib diisi'
    }
    if (file.size > maxSize) {
      return `Ukuran file maksimal ${maxSize / (1024 * 1024)}MB`
    }
    if (!allowedTypes.includes(file.type)) {
      return `Format file harus ${allowedTypes.map(t => t.split('/')[1].toUpperCase()).join('/')}`
    }
    return ''
  }

  return {
    createErrors,
    validateEmail,
    validatePassword,
    validateRequired,
    validateFile
  }
}

