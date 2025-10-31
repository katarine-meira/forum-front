<template>
  <div>
    <q-card bordered flat class="q-pa-sm q-mb-lg">
      <form @submit.prevent="createQuestion">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <div class="q-gutter-md q-pr-xl" >
              <q-input v-model="question.title" label="Título" />
            </div>
          </q-item-section>
        </q-item>
        <q-card-section>
          <div class="items-center q-px-xl">
            <q-input v-model="question.body" borderless placeholder="O que está acontecendo?" autogrow />
          </div>
        </q-card-section>
        <q-card-actions>
          <!-- <q-btn flat color="negative" round icon="favorite" /> -->

          <q-space/>
          <q-btn type="submit" class="q-pr-xl" color="white" text-color="black" label="postar" style="width: 90px" />
        </q-card-actions>
      </form>
    </q-card>
  </div>
</template>

<script setup>
  import { useQuestionsStore } from 'src/store/questions'
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'

  const $q = useQuasar()
  const questionsStore = useQuestionsStore()
  
  const question = ref({
    title: '',
    body: '',
  })

  async function createQuestion() {
      try {
        await questionsStore.postQuestion(question.value.title, question.value.body)

        $q.notify({
          type: 'positive',
          message: 'Questão criada com sucesso!',
          position: 'top'
        })
        
        question.value.title = ''
        question.value.body = ''
      } catch (err) {
        console.error(err)

        $q.notify({
          type: 'negative',
          message: 'Erro ao criar questão',
          position: 'top'
        })
      }
      
    }

</script>

<style scoped>
  
</style>
