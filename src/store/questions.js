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
        console.log(data)

        this.questions = { ...data }
        return this.questions
      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao buscar Questions'
        throw error
      }
    },
    async postQuestion(title, body) {
      this.error = null
      try {
        const { data: dataPostQuestions } = await api.post('/questions', {
          title,
          body,
        })

        return dataPostQuestions

      } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao criar questão!'
        throw error
      }
    },
  },
})
