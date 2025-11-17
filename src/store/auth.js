import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { jwtDecode } from 'jwt-decode'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    error: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    userData(state) {
      if (!state.token) return null
      try {
        return jwtDecode(state.token)
      } catch {
        return null
      }
    },

    userRole() {
      return this.userData?.role || null
    },

    userId() {
      return this.userData?.sub || null
    },
  },
  actions: {
    async register(name, email, password) {
      this.error = null
      try {
        const { data: dataRegister } = await api.post('/auth/signup', {
          name,
          email,
          password,
        })

        // se o backend retornar o token
        if (dataRegister.access_token) {
            this.token = dataRegister.access_token
            localStorage.setItem('token', dataRegister.access_token)
        }
        return dataRegister

      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao registrar usuário'
        throw error
      }
    },

    async login(email, password) {
      this.error = null
      try {
        const { data: dataLogin } = await api.post('/auth/signin', {
          email,
          password,
        })
        this.token = dataLogin.access_token
        localStorage.setItem('token', dataLogin.access_token)

        return dataLogin.access_token
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Credenciais inválidas'
        throw error
      }
    },

    logout() {
        this.token = null
        localStorage.removeItem('token')
    },

    initAuth() {
      const token = localStorage.getItem('token')
      if (!token) return

      try {
        const decoded = jwtDecode(token)

        // Verifica expiração (exp vem em segundos)
        if (decoded.exp * 1000 < Date.now()) {
          this.logout()
          return
        }

        this.token = token
      } catch (error) {
        this.logout()
        throw error
      }
    },
  },
})
