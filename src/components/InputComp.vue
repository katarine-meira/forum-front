<template>
  <div>
    <q-card class="">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class="q-gutter-md q-pr-xl" >
            <q-input v-model="text" label="Título" />
          </div>
        </q-item-section>
      </q-item>
      <q-card-section>
        <div class="items-center q-px-xl">
          <q-input borderless placeholder="O que está acontecendo?" autogrow />
        </div>
      </q-card-section>
      <q-card-actions>
        <!-- <q-btn flat color="negative" round icon="favorite" /> -->

        <q-space/>
        <q-btn class="q-pr-xl" color="white" text-color="black" label="postar" style="width: 90px" />
      </q-card-actions>
    </q-card>
    <br><br>
  </div>
</template>

<script setup>
  // import { ref } from 'vue'

 
</script>

<style scoped>

</style>
