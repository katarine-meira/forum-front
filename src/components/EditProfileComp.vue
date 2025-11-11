<template>
    <q-dialog v-model="edit">
        <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
            <div class="text-h6">Editar perfil</div>
            </q-card-section>

            <q-separator />

            <q-card-section style="max-height: 50vh" class="scroll">
                <div class="relative-position">
                    <q-img :src="bannerPreview || ''" style="height:180px; background-color:darkgray;"/>
                    <div class="absolute-center">
                        <q-btn round dense flat size="25px" icon="add_a_photo" color="white" @click="pickBanner"/>
                        <q-btn round dense flat size="25px" icon="close" color="white" @click="removeBanner"/>
                    </div>
                </div>

                <div class="q-ml-md" style="margin-top: -50px;">
                    <div class="relative-position" style="display: inline-block;">
                        <q-avatar size="100px" class="shadow-3 border-white">
                            <img :src="avatarPreview" alt="Avatar" />
                        </q-avatar>
                        <!-- Botão de editar avatar -->
                        <q-btn round dense flat icon="add_a_photo" color="white" class="absolute-center" @click="pickAvatar"/>
                    </div>
                </div>
                <q-form class="q-mt-lg">
                    <!-- Inputs ocultos -->
                    <input ref="avatarInput" type="file" accept="image/*" hidden @change="onAvatarChange" />
                    <input ref="bannerInput" type="file" accept="image/*" hidden @change="onBannerChange" />
                    <q-input
                        v-model="formEditProfile.nome" label="Nome" outlined class="q-mb-sm"
                        :rules="[
                            val => val.length >= 3 || 'Mínimo 3 caracteres',
                            val => val.length <= 32 || 'Máximo 50 caracteres'
                        ]"
                    />
                    <q-input
                        v-model="formEditProfile.email" label="E-mail" type="email" outlined class="q-mb-sm"
                        :rules="[
                            val => !!val || 'O e-mail é obrigatório',
                            val => val.length <= 100 || 'Máximo 100 caracteres'
                        ]"
                    />
                    <q-input 
                        outlined autogrow v-model="formEditProfile.bio" label="Bio" class="q-mb-sm"
                        :rules="[
                            val => val.length <= 500 || 'Máximo 500 caracteres'
                        ]"
                    />
                    <q-select 
                        outlined v-model="formEditProfile.semestre" :options="options" label="Seu semestre" class="q-mb-sm"
                        :rules="[
                            val => val.length <= 100 || 'Máximo 15 caracteres'
                        ]"
                    />
                    <q-input 
                        outlined v-model="formEditProfile.linkedin" label="Seu Linkedin" class="q-mb-sm"
                        :rules="[
                            val => val.length <= 100 || 'Máximo 30 caracteres'
                        ]" 
                    />
                    <q-input 
                        outlined v-model="formEditProfile.github" label="Seu GitHub" class="q-mb-sm"
                        :rules="[
                            val => val.length <= 100 || 'Máximo 30 caracteres'
                        ]" 
                    />
                    <q-input 
                        outlined v-model="formEditProfile.habilidades" label="Habilidades" class="q-mb-sm"
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
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useUserStore } from 'src/store/user'
  import { useQuasar } from 'quasar'
  
  const $q = useQuasar()
  const edit = ref(false)
  const userStore = useUserStore()

  const options = [
        '1º Semestre', '2º Semestre', '3º Semestre', '4º Semestre', '5º Semestre', '6º Semestre', '7º Semestre', '8º Semestre' 
      ]

  const props = defineProps({
    modelValue: Boolean,
  })

  //pode emitir eventos para o pai
  const emit = defineEmits(['update:modelValue'])

  watch(() => props.modelValue, val => edit.value = val)
  watch(edit, val => emit('update:modelValue', val))

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

      avatarPreview.value = userStore.user.avatarFullUrl
      bannerPreview.value = userStore.user.bannerFullUrl
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
    bannerPreview.value = null
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
        await userStore.fetchMe()

        

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