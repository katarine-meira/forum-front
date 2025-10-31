import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useQuestionsStore } from './questions'

export const useAnswersStore = defineStore('answers', {
  state: () => ({
    answers: [],
    error: null,
  }),
  actions: {
    async postAnswer( questionId, body) {
      this.error = null
      try {
        const { data: newAnswer } = await api.post(`/answers/${questionId}`, {
            body,
        })
        
        //encontra a pergunta que acabou de receber a resposta
        const questionsStore = useQuestionsStore()
        const question = questionsStore.questions.find(q => q.id === questionId)
        
        // insere a nova resposta na pergunta certa
        if (question) {
          if (!question.answers) question.answers = []
          question.answers.push(newAnswer)
        }

        return newAnswer
    } catch (error) {
        this.error =
          error.response?.data?.message || 'Erro ao criar resposta.'
        throw error
      }
    },
    
  },
})
