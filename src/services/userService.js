import api from './api'
import CryptoJS from 'crypto-js'

export const userService = {
  async getUsers(offset = 0, limit = 100) {
    try {
      const response = await api.get('/admin', {
        params: {
          offset: offset,
          limit: limit
        }
      })
      return response.data
    } catch (error) {

      const errorData = error.response?.data
      const errorMessage = errorData?.message || errorData?.error || 'Server error saat memuat data users'
      const serverError = new Error(errorMessage)
      serverError.status = error.response?.status || 500
      serverError.response = error.response
      throw serverError
    }
  },

  async getUserDetail(userId) {
    try {
      const response = await api.get(`/admin/${userId}`)
      
      return response.data
    } catch (error) {
      
      if (error.response?.status === 404 || error.response?.status === 500) {
        try {
          const altResponse = await api.get(`/users/${userId}`)
          return altResponse.data
        } catch (altError) {
          const errorData = error.response?.data || altError.response?.data
          const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || 'Gagal memuat detail user'
          const serverError = new Error(errorMessage)
          serverError.status = error.response?.status || altError.response?.status || 500
          serverError.response = error.response || altError.response
          throw serverError
        }
      }

      const errorData = error.response?.data
      const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || 'Gagal memuat detail user'
      const serverError = new Error(errorMessage)
      serverError.status = error.response?.status || 500
      serverError.response = error.response
      throw serverError
    }
  },

  async updateUser(userId, userData) {
    try {
      const requestBody = {}
      
      requestBody.first_name = userData.firstName || ''
      requestBody.last_name = userData.lastName || ''
      
      if (userData.gender) {
        requestBody.gender = userData.gender === 'Laki-laki' ? 'male' : 
                            userData.gender === 'Perempuan' ? 'female' : 
                            userData.gender.toLowerCase()
      }
      
      if (userData.dateOfBirth) {
        const date = new Date(userData.dateOfBirth)
        if (!isNaN(date.getTime())) {
          requestBody.date_of_birth = date.toISOString()
        }
      }
      
      requestBody.email = userData.email || ''
      requestBody.phone = userData.phoneNumber || ''
      requestBody.address = userData.address || ''
      
      if (userData.password && userData.password.trim()) {
        requestBody.password = CryptoJS.SHA256(userData.password).toString()
      }

      const response = await api.put(`/admin/${userId}/update`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.data
    } catch (error) {
      const errorData = error.response?.data
      const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || 'Gagal memperbarui user'
      const serverError = new Error(errorMessage)
      serverError.status = error.response?.status || 500
      serverError.response = error.response
      throw serverError
    }
  },

  async deleteUser(userId) {
    try {
      const response = await api.delete(`/admin/${userId}/delete`)
      return response.data
    } catch (error) {
      const errorData = error.response?.data
      const errorMessage = errorData?.err_message || errorData?.err_message_en || errorData?.message || 'Gagal menghapus user'
      const serverError = new Error(errorMessage)
      serverError.status = error.response?.status || 500
      serverError.response = error.response
      throw serverError
    }
  }
}

