<template>
    
        <!-- Coluna lateral -->
        <div class="col-12 col-md-4">
          <div class="q-ma-md">
            <q-card bordered flat>
              <q-card-section class="text-center">
                    <div class="text-h6">{{ userStore?.user.name || 'Usuário' }}</div>                <q-btn @click="edit = true" flat color="primary"> 
                    <q-icon class="q-pr-xs" name="edit" size="18px" />
                    <span>Editar perfil</span>
                </q-btn>
              </q-card-section>

              <q-dialog v-model="edit">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Editar perfil</div>
                  </q-card-section>

                  <q-separator />

                  <q-card-section style="max-height: 50vh" class="scroll">
                    <q-form>
                      <q-input
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
                      <q-input outlined v-model="bio" label="Bio" :dense="dense" />
                      <q-input outlined v-model="semestre" label="Seu semestre" :dense="dense" />
                      <q-input outlined v-model="linkedin" label="Seu Linkedin" :dense="dense" />
                      <q-input outlined v-model="github" label="Seu GitHub" :dense="dense" />
                      <q-input outlined v-model="habilidades" label="Habilidades" :dense="dense" />
                    </q-form>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="right">
                    <q-btn flat label="Decline" color="primary" v-close-popup />
                    <q-btn flat label="Accept" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <q-separator />

              <q-card-section>
                <div class="text-subtitle2 q-mb-sm">Sobre</div>
                <q-list dense>
                  <q-item class="q-mb-md">
                    <q-item-section>{{ userStore?.user.bio || 'Sobre você' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="badge" /></q-item-section>
                    <q-item-section>Estudante</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="school" /></q-item-section>
                    <q-item-section>{{ userStore?.user.semester || 'Seu semestre' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-linkedin" /></q-item-section>
                    <q-item-section>{{ userStore?.user.linkedin || 'Seu Linkedin' }} </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-github" /></q-item-section>
                    <q-item-section>{{ userStore?.user.github || 'Seu GitHub' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon  name="psychology" /></q-item-section>
                    <q-item-section>{{ userStore?.user.skills || 'Habilidades' }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="text-subtitle2 q-mb-sm">Equipes</div>
                <q-btn flat icon="add" label="Criar equipe" color="primary" />
              </q-card-section>
            </q-card>
          </div>
        </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { onMounted } from 'vue'
  import { useUserStore } from 'src/store/user'

  const userStore = useUserStore()

  onMounted( async () => {
    await userStore.fetchMe()
    console.log(userStore.user);
    
  })


  const edit = ref(false)
</script>