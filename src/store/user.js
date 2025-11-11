import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

const baseURL = 'http://localhost:3000'


export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    error: null,
  }),
  actions: {
    async fetchMe() {
      this.error = null
      try {
        const { data } = await api.get('/user/me')
        
        // Monta URLs completas (se existirem)
        this.user = {
          ...data,
          avatarFullUrl: data.avatarUrl
            ? baseURL + data.avatarUrl
            : '/src/assets/userProfile.png',
          bannerFullUrl: data.bannerUrl
            ? baseURL + data.bannerUrl
            : ''
        }
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao buscar Users'
        throw error
      }
    },
    async updateProfile(payload) {
      this.error = null
      try {
        const isFormData = payload instanceof FormData
        const { data } = await api.put('/user/me', payload, {
          headers: isFormData
            ? { 'Content-Type': 'multipart/form-data' }
            : undefined, // se for JSON, deixa o Axios definir
        })
        
        this.user = data
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao atualizar perfil!'
        throw error
      }
    },
  },
})
