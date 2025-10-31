<template>
    <q-card bordered flat class="q-ml-xl q-pl-sm" >
        <div class="row row items-center">
          <q-avatar size="35px" class="q-mr-sm">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg" alt="Avatar">
          </q-avatar>
            <q-input class="col" v-model="bodyAnswer" borderless placeholder="Responder" autogrow />
            <q-btn @click="createAnswer()" class="q-ma-sm " color="white" text-color="black" label="postar" style="width: 70px" />
        </div>
      </q-card>
</template>
<script setup>
    import { useAnswersStore } from 'src/store/answers'
    import { ref } from 'vue'
    import { useQuasar } from 'quasar'
    
    const $q = useQuasar()
    const answerStore = useAnswersStore()

    const bodyAnswer = ref('')

    const props = defineProps({
      questionId: {
        type: Number,
        required: true
      }
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

