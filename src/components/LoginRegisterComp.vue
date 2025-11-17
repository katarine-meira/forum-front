<template>
  <q-card class="q-pa-none row no-wrap" style="width: 900px; max-width: 95vw;">
    <!-- LADO ESQUERDO (IMAGEM) -->
    <div class="col-6 bg-primary flex flex-center">
        <img
          src="../assets/LITECApp.png"
          alt="Imagem de login"
          class="full-width"
          style="object-fit: cover; height: 100%;"
        />
    </div>
    <!-- LADO DIREITO (FORMULÁRIOS) -->
    <div class="col-6 q-pa-lg">
      <q-tabs
        v-model="tab"
        class="text-primary"
        align="justify"
      >
        <q-tab name="login" label="Login" icon="login" />
        <q-tab name="register" label="Registrar" icon="person_add" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <!-- LOGIN PANEL -->
        <q-tab-panel name="login">
          <q-form @submit.prevent="handleLogin" >
            <q-input
              v-model="formLogin.email"
              label="E-mail"
              type="email"
              outlined
              class="q-mb-md"
              :rules="[
                val => !!val || 'O e-mail é obrigatório'
              ]"
            />
            <q-input
              v-model="formLogin.password"
              label="Senha"
              type="password"
              outlined
              class="q-mb-md"
              :rules="[ val => val && val.length > 0 || 'A senha é obrigatória']"
            />
            <div class="row justify-end">
              <q-btn
                label="Entrar"
                color="primary"
                type="submit"
              />
            </div>
          </q-form>
        </q-tab-panel>

        <!-- REGISTER PANEL -->
        <q-tab-panel name="register">
          <q-form @submit.prevent="handleRegister">
            <q-input
              v-model="formRegister.nome"
              label="Nome"
              outlined
              class="q-mb-md"
              :rules="[
                val => !!val || 'O nome é obrigatório',
                val => val.length >= 3 || 'Mínimo 3 caracteres',
                val => val.length <= 32 || 'Máximo 50 caracteres'
              ]"
            />
            <q-input
              v-model="formRegister.email"
              label="E-mail"
              type="email"
              outlined
              class="q-mb-md"
              :rules="[
                val => !!val || 'O e-mail é obrigatório',
                val => val.length <= 100 || 'Máximo 100 caracteres'
              ]"
            />
            <q-input
              v-model="formRegister.password"
              label="Senha"
              type="password"
              outlined
              class="q-mb-md"
              :rules="[
                val => !!val || 'A senha é obrigatória',
                val => val.length >= 6 || 'Mínimo 6 caracteres',
                val => val.length <= 32 || 'Máximo 32 caracteres'
              ]"
            />
            <div class="row justify-end">
              <q-btn
                label="Registrar"
                color="primary"
                type="submit"
              />
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-card>
</template>

<script setup>
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'
    import { useAuthStore } from 'src/store/auth'
    import { useRouter } from 'vue-router'

    const $q = useQuasar()
    const tab = ref('login')
    const router = useRouter()
    
    const { login, register } = useAuthStore()

    const formLogin = ref({
        email: '',
        password: '',
    })

    const formRegister = ref({
        nome: '',
        email: '',
        password: '',
    })

    async function handleLogin() {
      try {
        await login(formLogin.value.email, formLogin.value.password)
        

        $q.notify({
          type: 'positive',
          message: 'Login realizado com sucesso!',
          position: 'top'
        })

        router.push("/home")
      } catch (err) {
        console.error(err)

        $q.notify({
          type: 'negative',
          message: 'E-mail ou senha incorretos.',
          position: 'top'
        })
      }
      
    }

    async function handleRegister() {
      try {
        await register(formRegister.value.nome, formRegister.value.email, formRegister.value.password)

        $q.notify({
          type: 'positive',
          message: 'Registro realizado com sucesso!',
          position: 'top'
        })

        router.push("/home")
      } catch (err) {
        let msg = err.response?.data?.message

        if (Array.isArray(msg)) {
          msg = msg.map(m => {
            if (m.includes('email must be an email')) return 'E-mail inválido'
            if (m.includes('name must be longer')) return 'O nome deve ter no mínimo 3 caracteres'
            if (m.includes('password must be longer')) return 'A senha deve ter no mínimo 6 caracteres'
            return m // caso não encontre tradução, mantém original
          }).join('\n')
        }

        $q.notify({
          type: 'negative',
          message: msg || 'Erro ao registrar usuário',
          position: 'top'
        })
      }

    }

</script>

<style scoped>
  
  @media (max-width: 768px) {
    .q-card {
      flex-direction: column !important;
    }

    .col-6 {
      width: 100%;
    }

    img {
      height: 200px;
    }
  }
</style>