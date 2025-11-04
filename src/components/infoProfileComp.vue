<template>
    <!-- Coluna principal -->
        <div class="col-12 col-md-8">
          <div class="q-ma-md">
            <q-card class="q-mb-md">
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
          </div>
        </div>
</template>
<script setup>

</script>