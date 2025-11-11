<template>
  <div class="q-mb-xl" v-for="(question, index) in questionsStore.questions" :key="index">
    <q-card bordered flat class="q-pa-sm q-mb-md">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ question.user.name }}</q-item-label>
          <q-item-label caption>{{ question.createdAt }}</q-item-label>
        </q-item-section>
        
        <q-btn color="grey" round flat icon="more_vert" @click="more = true"/>

        <q-menu anchor="bottom right" self="top right">
            <q-list style="min-width: 140px">
                <q-item clickable v-close-popup class="q-pa-md items-center">
                    <q-icon name="edit" size="16px" class="q-pr-sm"/>
                    <span class="text-body2">Editar</span>
                </q-item>

                <q-item clickable v-close-popup class="q-pa-md flex items-center">
                <q-icon name="delete" size="16px" color="negative" class="q-pr-sm" />
                <span class="text-body2 text-negative">Excluir</span>
                </q-item>
            </q-list>
        </q-menu>
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
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="Avatar">
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
    import { onMounted } from 'vue'
    import { useQuestionsStore } from 'src/store/questions'
    import InputAnswerComp from 'src/components/InputAnswerComp.vue';


    
    const questionsStore = useQuestionsStore()

    onMounted(async () => {
      await questionsStore.getQuestions() // busca as perguntas na API ao carregar
    })

</script>

<style scoped>
  .test{
    border: 50px;
  }
  .border-left {
    border-left: 2px solid #ddd;
  }
</style>