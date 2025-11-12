import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

const baseURL = 'http://localhost:3000'

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
        

        this.questions = Array.isArray(data) ? data.map(question => ({
          ...question,
          user: {
            ...question.user,
            avatarFullUrl: question.user?.avatarUrl
              ? baseURL + question.user.avatarUrl
              : '/src/assets/userProfile.png',
            bannerFullUrl: question.user.bannerUrl
              ? baseURL + question.user.bannerUrl
              : ''
          },
          answers: question.answers?.map(answer => ({
            ...answer,
            user:{
              ...answer.user,
              avatarFullUrl: answer.user?.avatarUrl
              ? baseURL + answer.user.avatarUrl
              : '/src/assets/userProfile.png'
            }

          }))
        })) : data.questions || []
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
