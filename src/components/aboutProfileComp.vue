<template>
        <!-- Coluna lateral -->
        <div class="col-12 col-md-4">
          <div class="q-ma-md">
            <q-card bordered flat>
              <q-card-section class="text-center">
                    <div class="text-h6">{{ userStore?.user.name || 'Usuário' }}</div>                
                    <q-btn @click="edit = true" flat color="primary"> 
                      <q-icon class="q-pr-xs" name="edit" size="18px" />
                      <span>Editar perfil</span>
                    </q-btn>
              </q-card-section>

              <edit-profile-comp v-model = "edit" />

              <q-separator />

              <q-card-section class="styleText">
                <div class="text-subtitle2 q-mb-sm about">Sobre</div>
                <q-list dense>
                  <q-item class="q-mb-md text-grey-9 styleText">
                    <q-item-section>{{ userStore?.user.bio || 'Sobre você'}}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="badge" /></q-item-section>
                    <q-item-section class="text-grey-9">{{ cargo }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="school" /></q-item-section>
                    <q-item-section class="text-grey-9">{{ userStore?.user.semester || 'Seu semestre' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-linkedin" /></q-item-section>
                    <div v-if="userStore.user.linkedin">  
                      <a class="text-grey-9" :href="userStore.user.linkedin.startsWith('http') 
                      ? userStore.user.linkedin : 'https://' + userStore.user.linkedin" 
                      target="_blank">{{ userStore.user.linkedin }}</a>
                    </div>
                    <q-item-section v-else class="text-grey-9">Seu Linkedin</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-github" /></q-item-section>
                    <div v-if="userStore.user.github">  
                      <a class="text-grey-9" :href="userStore.user.github.startsWith('http') 
                      ? userStore.user.github : 'https://' + userStore.user.github" 
                      target="_blank">{{ userStore.user.github }}</a>
                    </div>
                    <q-item-section v-else class="text-grey-9">Seu GitHub</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon  name="psychology" /></q-item-section>
                    <q-item-section class="text-grey-9">{{ userStore?.user?.skills || 'Habilidades' }}</q-item-section>
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
  import { ref, onMounted } from 'vue'
  import { useUserStore } from 'src/store/user'
  import { useAuthStore } from 'src/store/auth'
  import EditProfileComp from 'src/components/EditProfileComp.vue'


  const edit = ref(false)
  const userStore = useUserStore()
  const authStore = useAuthStore()
  const cargo = ref('Estudante')


  onMounted(async () => {
    await userStore.fetchMe()

    if(authStore.userRole == 'LEADER'){
      cargo.value = 'Líder'
    }
    else if(authStore.userRole == 'MEMBER'){
      cargo.value = 'Membro da liga'
    }
    else if(authStore.userRole == 'STUDENT'){
      cargo.value = 'Estudante'
    }
    
  })

</script>

<style scoped>
  
</style>