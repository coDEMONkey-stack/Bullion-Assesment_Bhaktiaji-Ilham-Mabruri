import api from './api'
import CryptoJS from 'crypto-js'

export const authService = {
  async login(email, password) {
    const hashedPassword = CryptoJS.SHA256(password).toString()
    const response = await api.post('/auth/login', {
      email,
      password: hashedPassword
    })
    return response.data
  },

  async register(userData) {
    const hashedPassword = CryptoJS.SHA256(userData.password).toString()

    const dateOfBirth = userData.dateOfBirth 
      ? new Date(userData.dateOfBirth).toISOString()
      : userData.dateOfBirth

    const gender = userData.gender === 'Laki-laki' ? 'male' : 
                   userData.gender === 'Perempuan' ? 'female' : 
                   userData.gender.toLowerCase()
    
    const formData = new FormData()
    formData.append('first_name', userData.firstName)
    formData.append('last_name', userData.lastName)
    formData.append('gender', gender)
    formData.append('date_of_birth', dateOfBirth)
    formData.append('email', userData.email)
    formData.append('phone', userData.phoneNumber) 
    formData.append('address', userData.address)
    formData.append('password', hashedPassword)
    formData.append('photo', userData.photoProfile) 

    const response = await api.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  }
}

