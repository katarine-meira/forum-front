import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useQuestionsStore = defineStore('questions', {
  state: () => ({
    questions: [],
    error: null,
  }),
  actions: {
    async getQuestions() {
      this.error = null
      try {
        const { data } = await api.get('/questions')
        

        this.questions = Array.isArray(data) ? data : data.questions || []
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao buscar Questions'
        throw error
      }
    },
    async postQuestion(title, body) {
      this.error = null
      try {
        const { data: newQuestion } = await api.post('/questions', {
          title,
          body,
        })

        this.questions.unshift(newQuestion)
        return newQuestion
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao criar questão!'
        throw error
      }
    },
  },
})
