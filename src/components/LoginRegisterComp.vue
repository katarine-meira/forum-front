<template>
    <q-card class="q-pa-lg" style="width: 400px; max-width: 90vw">
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
          <q-form @submit.prevent="handleLogin">
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
    </q-card>
</template>

<script setup>
    import { ref } from 'vue'

    const tab = ref('login')


    const formLogin = ref({
        email: '',
        password: '',
    })

    const formRegister = ref({
        nome: '',
        email: '',
        password: '',
    })

    function handleLogin() {
    console.log('Login enviado:', formLogin.value)
    // aqui futuramente: chamada ao backend com axios
    }

    function handleRegister() {
    console.log('Registro enviado:', formRegister.value)
    // aqui futuramente: chamada ao backend com axios
    }


</script>