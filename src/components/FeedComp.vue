<template>
  <div class="q-mb-xl" v-for="(question, index) in questionsStore.questions" :key="index">
    <q-card bordered flat class="q-pa-sm q-mb-md">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="question.user.avatarFullUrl">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ question.user.name }}</q-item-label>
          <q-item-label caption>{{ question.createdAt }}</q-item-label>
        </q-item-section>
        
        <q-btn v-if="canEditOrDelete(question.userId)" color="grey" round flat icon="more_vert" @click="more = true">

          <q-menu anchor="bottom right" self="top right">
              <q-list style="min-width: 140px">
                  <q-item clickable v-close-popup class="q-pa-md items-center">
                      <q-icon name="edit" size="16px" class="q-pr-sm"/>
                      <btn class="text-body2">Editar</btn>
                  </q-item>

                  <q-item clickable v-close-popup class="q-pa-md flex items-center">
                  <q-icon name="delete" size="16px" color="negative" class="q-pr-sm" />
                  <btn lable="confirme" class="text-body2 text-negative">Excluir</btn>
                    <q-dialog v-model="confirme" backdrop-filter="saturate(80%)">
                      <q-card>
                        <q-card-section class="text-h6">
                          Deletar post
                        </q-card-section>

                        <q-card-section>
                          Deseja deletar esse post?
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn flat label="Excluir" color="primary" v-close-popup @click="deleteQuestion(question.id)" />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </q-item>
              </q-list>
          </q-menu>
        </q-btn>
      </q-item>

      <q-card-section>
        <div class="text-h6">{{ question.title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none styleText">
        {{ question.body }}
      </q-card-section>
      
    </q-card>
    <div class="q-ml-xl q-mb-md q-pl-sm border-left" v-for="(answer, i) in question.answers" :key="i">
      <div class="row items-start no-wrap">
        <q-avatar size="35px" class="q-mr-sm">
          <img :src="answer.user.avatarFullUrl" alt="Avatar">
        </q-avatar>
        <div class="column">
          <div class="row items-center">
            <div class="text-weight-medium q-mr-sm">{{ answer.user.name }}</div>
            <div class="text-caption text-grey">{{answer.createdAt}}</div>
          </div>
          <div class="text-body2 q-mt-xs styleText">
            {{answer.body}}
          </div>
        </div>
      </div>
    </div>
    <input-answer-comp :question-id="question.id"/>
    
  </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useQuestionsStore } from 'src/store/questions'
    import InputAnswerComp from 'src/components/InputAnswerComp.vue';
    import { useAuthStore } from 'src/store/auth'

    const questionsStore = useQuestionsStore()
    const authStore = useAuthStore()
    const confirme = ref(false)
    
    
    onMounted(async () => {
      await questionsStore.getQuestions() // busca as perguntas na API ao carregar
    })

    const canEditOrDelete = (questionUserId) => {
      const user = authStore.userData
      if (!user) return false

      // Leader pode tudo
      if (user.role === "LEADER") return true

      // Student/Member só podem se forem os donos
      return user.sub === questionUserId
    }

    const deleteQuestion = async (id) => {
      try {
        await questionsStore.deleteQuestion(id)
      }catch (error) {
        console.error(error)
      }
    }

</script>

<style scoped>
  .test{
    border: 50px;
  }
  .border-left {
    border-left: 2px solid #ddd;
  }
</style>