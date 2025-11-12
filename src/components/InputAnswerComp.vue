<template>
    <q-card bordered flat class="q-ml-xl q-pl-sm" >
        <div class="row row items-center">
          <q-avatar size="35px" class="q-mr-sm">
            <img :src="userStore.user.avatarFullUrl" alt="Avatar">
          </q-avatar>
            <q-input class="col" v-model="bodyAnswer" borderless placeholder="Responder" autogrow />
            <q-btn @click="createAnswer()" class="q-ma-sm " color="white" text-color="black" label="postar" style="width: 70px" />
        </div>
      </q-card>
</template>
<script setup>
    import { useAnswersStore } from 'src/store/answers'
    import { useQuestionsStore } from 'src/store/questions'
    import { useUserStore } from 'src/store/user'
    import { ref, onMounted } from 'vue'
    import { useQuasar } from 'quasar'
    
    const $q = useQuasar()
    const answerStore = useAnswersStore()
    const questionsStore = useQuestionsStore()

    const bodyAnswer = ref('')

    const props = defineProps({
      questionId: {
        type: Number,
        required: true
      }
    })

    const userStore = useUserStore()

    onMounted( async () => {
      await userStore.fetchMe()
    })


    async function createAnswer() {
      try {
        await answerStore.postAnswer(props.questionId, bodyAnswer.value)

        $q.notify({
          type: 'positive',
          message: 'Resposta criada com sucesso!',
          position: 'top'
        })
        
        bodyAnswer.value = ''
        await questionsStore.getQuestions()
      } catch (err) {
        console.error(err)

        $q.notify({
          type: 'negative',
          message: 'Erro ao criar resposta',
          position: 'top'
        })
      }
    }
</script>

