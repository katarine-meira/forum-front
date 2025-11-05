import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

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
        
        this.user = data
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao buscar Users'
        throw error
      }
    },
    async updateProfile(payload) {
      this.error = null
      try {
        const { data } = await api.put('/user/me', payload)
        
        this.user = data
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao atualizar perfil!'
        throw error
      }
    },
  },
})
