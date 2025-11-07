<template>
  <q-page class="bg-grey-1 row flex justify-center">
    <div class="col-12 col-lg-8">
      <!-- Banner -->
      <div class="row">
        <div class="col-12">
          <div class="relative-position q-ma-md q-mb-lg">
            <q-img
              :src="userStore.user.bannerUrl 
          ? baseURL + userStore.user.bannerUrl 
          : 'https://via.placeholder.com/900x200?text=Banner+do+Usuário'"
              class="banner"
              no-transition
              no-spinner
            />
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-12 col-md-4 ">
          <div class="">
            <q-card>
              <div class="absolute-bottom flex justify-center">
                <q-avatar size="100px" class=" shadow-2">
                  <img src="../assets/userProfile.png" />
                </q-avatar>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      
      <!-- Conteúdo -->
      <div>
        <div class="row">
          <!-- Coluna lateral -->
          <about-profile-comp/>
          <!-- Coluna principal -->
          <info-profile-comp/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
  import { onMounted } from 'vue'
  import aboutProfileComp from 'src/components/aboutProfileComp.vue';
  import infoProfileComp from 'src/components/infoProfileComp.vue';
  import { useUserStore } from 'src/store/user'
    

  const userStore = useUserStore()

  onMounted( async () => {
    await userStore.fetchMe()
    console.log(userStore.user);
    
  })

</script>

<style scoped>
.banner {
  height: 160px;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
  background-color:darkgray;
}

.avatar {
  /* border: 4px solid white; */
  transform: translateY(10%);
}
</style>
