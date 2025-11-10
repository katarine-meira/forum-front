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

              <q-dialog v-model="edit">
                <q-card style="width: 700px; max-width: 80vw;">
                  <q-card-section>
                    <div class="text-h6">Editar perfil</div>
                  </q-card-section>

                  <q-separator />

                  <q-card-section style="max-height: 50vh" class="scroll">
                    <div class="relative-position">
                      <!-- :src="bannerPreview || bannerUrl" -->
                      <q-img
                        :src="bannerPreview || ''" style="height:180px; background-color:darkgray;"
                      
                      >
                        <!-- <template v-slot:error>
                          <div class="absolute-full flex flex-center text-white bg-grey">
                            Sem banner
                          </div>
                        </template> -->
                      </q-img>
                      <div class="absolute-center">
                        <q-btn
                          round
                          dense
                          flat
                          size="25px"
                          icon="add_a_photo"
                          color="white"
                          @click="pickBanner"
                        />
                        <q-btn
                          round
                          dense
                          flat
                          size="25px"
                          icon="close"
                          color="white"
                          @click="removeBanner"
                        />
                      </div>
                    </div>
                    <div class="q-ml-md" style="margin-top: -50px;">
                      <div class="relative-position" style="display: inline-block;">
                        <q-avatar size="100px" class="shadow-3 border-white">
                          <img :src="avatarPreview" alt="Avatar" />
                        </q-avatar>
                        <!-- :src="avatarPreview || avatarUrl" -->
                        <!-- Botão de editar avatar -->
                        <q-btn
                          round
                          dense
                          flat
                          icon="add_a_photo"
                          color="white"
                          class="absolute-center"
                          @click="pickAvatar"
                        />
                      </div>
                    </div>
                    <!-- Inputs ocultos -->
                    <q-form class="q-mt-lg">
                        <input ref="avatarInput" type="file" accept="image/*" hidden @change="onAvatarChange" />
                        <input ref="bannerInput" type="file" accept="image/*" hidden @change="onBannerChange" />
                        <q-input
                          v-model="formEditProfile.nome"
                          label="Nome"
                          outlined
                          class="q-mb-sm"
                          :rules="[
                            val => val.length >= 3 || 'Mínimo 3 caracteres',
                            val => val.length <= 32 || 'Máximo 50 caracteres'
                          ]"
                        />
                        <q-input
                          v-model="formEditProfile.email"
                          label="E-mail"
                          type="email"
                          outlined
                          class="q-mb-sm"
                          :rules="[
                            val => !!val || 'O e-mail é obrigatório',
                            val => val.length <= 100 || 'Máximo 100 caracteres'
                          ]"
                        />
                        <q-input 
                          outlined
                          autogrow
                          v-model="formEditProfile.bio" 
                          label="Bio"
                          class="q-mb-sm"
                          :rules="[
                            val => val.length <= 500 || 'Máximo 500 caracteres'
                          ]"
                        />
                        <q-input 
                          outlined 
                          v-model="formEditProfile.semestre" 
                          label="Seu semestre" 
                          class="q-mb-sm"
                          :rules="[
                            val => val.length <= 100 || 'Máximo 15 caracteres'
                          ]"
                        />
                        <q-input 
                          outlined 
                          v-model="formEditProfile.linkedin" 
                          label="Seu Linkedin" 
                          class="q-mb-sm"
                          :rules="[
                            val => val.length <= 100 || 'Máximo 30 caracteres'
                          ]" 
                        />
                        <q-input 
                          outlined 
                          v-model="formEditProfile.github" 
                          label="Seu GitHub" 
                          class="q-mb-sm"
                          :rules="[
                            val => val.length <= 100 || 'Máximo 30 caracteres'
                          ]" 
                        />
                        <q-input 
                          outlined 
                          v-model="formEditProfile.habilidades" 
                          label="Habilidades" 
                          class="q-mb-sm"
                          :rules="[
                            
                            val => val.length <= 100 || 'Máximo 100 caracteres'
                          ]"
                        />
                      </q-form>
                    
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="primary" v-close-popup />
                    <q-btn flat label="Salvar" color="primary" @click="updateUser()" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>

              <q-separator />

              <q-card-section>
                <div class="text-subtitle2 q-mb-sm">Sobre</div>
                <q-list dense>
                  <q-item class="q-mb-md">
                    <q-item-section>{{ userStore.user.bio }}</q-item-section>
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
                    <q-item-section clickable target="_blank" href="{{ userStore.user.linkedin }}">{{ userStore?.user.linkedin || 'Seu Linkedin' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-github" /></q-item-section>
                    <q-item-section>{{ userStore?.user.github || 'Seu GitHub' }}</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon  name="psychology" /></q-item-section>
                    <q-item-section>{{ userStore?.user?.skills || 'Habilidades' }}</q-item-section>
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
  import { watch } from 'vue'
  import { useUserStore } from 'src/store/user'
  import { useQuasar } from 'quasar'
  import { onMounted } from 'vue'


  
  const $q = useQuasar()
  const edit = ref(false)
  const userStore = useUserStore()

  onMounted(async () => {
    await userStore.fetchMe()
  })

  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'


  const formEditProfile = ref({
      nome: '',
      email: '',
      senha: '',
      bio: '',
      semestre: '',
      linkedin: '',
      github: '',
      habilidades: '',
    })

  // refs para inputs de arquivo
  const avatarInput = ref(null)
  const bannerInput = ref(null)

  // variáveis para preview e arquivos
  const avatarPreview = ref(null)
  const bannerPreview = ref(null)
  const avatarFile = ref(null)
  const bannerFile = ref(null)


  watch(edit, (newVal) => {
    if (newVal) {
      // sincroniza o form e os previews com os dados atuais
      formEditProfile.value = {
        nome: userStore.user.name || '',
        email: userStore.user.email || '',
        bio: userStore.user.bio || '',
        semestre: userStore.user.semester || '',
        linkedin: userStore.user.linkedin || '',
        github: userStore.user.github || '',
        habilidades: userStore.user.skills || '',
      }

      avatarPreview.value = userStore.user.avatarUrl
        ? baseURL + userStore.user.avatarUrl
        : '/src/assets/userProfile.png'

      bannerPreview.value = userStore.user.bannerUrl
        ? baseURL + userStore.user.bannerUrl
        : ''
    }
  })

  // Funções para abrir os seletores
  function pickAvatar() {
    avatarInput.value.click()
  }
  function pickBanner() {
    bannerInput.value.click()
  }

  // Preview da imagem escolhida
  function onAvatarChange(e) {
    const file = e.target.files[0]
    if (file) {
      avatarFile.value = file
      avatarPreview.value = URL.createObjectURL(file)
    }
  }

  function onBannerChange(e) {
    const file = e.target.files[0]
    if (file) {
      bannerFile.value = file
      bannerPreview.value = URL.createObjectURL(file)
    }
  }

  function removeBanner() {
    bannerFile.value = null
    bannerPreview.value = ''
  }

  async function updateUser() {
      try {
        const formData = new FormData()

        // adiciona os campos de texto
        formData.append('name', formEditProfile.value.nome)
        formData.append('email', formEditProfile.value.email)
        formData.append('bio', formEditProfile.value.bio)
        formData.append('semester', formEditProfile.value.semestre)
        formData.append('linkedin', formEditProfile.value.linkedin)
        formData.append('github', formEditProfile.value.github)
        formData.append('skills', formEditProfile.value.habilidades)

        // adiciona os arquivos (se existirem)
        if (avatarFile.value) {
          formData.append('avatar', avatarFile.value)
        }

        if (bannerFile.value) {
          formData.append('banner', bannerFile.value)
        }

        // envia pro store
        await userStore.updateProfile(formData)

        console.log(formData);

        $q.notify({
          type: 'positive',
          message: 'Perfil editado com sucesso!',
          position: 'top'
        })
        
      } catch (err) {
        console.error(err)

        $q.notify({
          type: 'negative',
          message: 'Erro ao editar perfil',
          position: 'top'
        })
      }
      
    }
</script>