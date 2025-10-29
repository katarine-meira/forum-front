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
            />
            <q-input
              v-model="formLogin.password"
              label="Senha"
              type="password"
              outlined
              class="q-mb-md"
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
            />
            <q-input
              v-model="formRegister.email"
              label="E-mail"
              type="email"
              outlined
              class="q-mb-md"
            />
            <q-input
              v-model="formRegister.password"
              label="Senha"
              type="password"
              outlined
              class="q-mb-md"
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
    import { ref } from 'vue'
    import { useAuthStore } from 'src/store/auth'
    import { useRouter } from 'vue-router'


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
        const token = await login(formLogin.value.email, formLogin.value.password)
        console.log(token, 'login')
        router.push("/home")
      } catch (err) {
        console.error(err)
      }
      
    }

    async function handleRegister() {
      try {
        const token = await register(formRegister.value.nome, formRegister.value.email, formRegister.value.password)
        console.log(token, 'register')
      } catch (err) {
        console.error(err)
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