<template>
    <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding>
        <div class="absolute-center" style="max-width: 768px; width: 90%; text-align: center">
          <q-img src="/icons/Logo-AurumDesk.png" height="140px" width="140px" />
          <login-register-comp/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>

</template>


<script setup>
    import LoginRegisterComp from 'src/components/LoginRegisterComp.vue';

</script>

<style scoped>

</style>