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
                  <q-tab name="posts" label="Posts" />
                  <q-tab name="respostas" label="Respostas" />
                  <q-tab name="certificados" label="Certificados" />
                </q-tabs>

                <q-separator />

                <q-tab-panels v-model="tab" animated>
                  <!-- POSTS PANEL -->
                  <q-tab-panel name="posts">
                    <h6>olá posts</h6>
                  </q-tab-panel>

                  <!-- RESPOSTAS PANEL -->
                  <q-tab-panel name="respostas">
                    <h6>olá respostas</h6>
                  </q-tab-panel>

                  <!-- CERTIFICADOS PANEL -->
                  <q-tab-panel name="certificados">
                    <h6>olá certificados</h6>
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </q-card>
          </div>
        </div>
</template>
<script setup>
  import { ref } from 'vue'

  const tab = ref('posts')

</script>