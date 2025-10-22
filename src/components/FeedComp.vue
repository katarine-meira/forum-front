<template>
  <div>
    <q-card>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
        
        <q-btn color="grey" round flat icon="more_vert" @click="more = true"/>

        <q-menu anchor="bottom right" self="top right">
            <q-list style="min-width: 140px">
                <q-item clickable v-close-popup class="q-pa-md items-center">
                    <q-icon name="edit" size="16px" class="q-pr-sm"/>
                    <span class="text-body2">Editar</span>
                </q-item>

                <q-item clickable v-close-popup class="q-pa-md flex items-center">
                <q-icon name="delete" size="16px" color="negative" class="q-pr-sm" />
                <span class="text-body2 text-negative">Excluir</span>
                </q-item>
            </q-list>
        </q-menu>
      </q-item>

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
      <q-card-actions>
        <!-- <q-btn flat color="negative" round icon="favorite" /> -->

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'comments_disabled' : 'comment'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Title</q-item-label>
              <q-item-label caption>Subhead</q-item-label>
            </q-item-section>

            <q-btn color="grey" round flat icon="more_vert" @click="more = true"/>

            <q-menu anchor="bottom right" self="top right">
                <q-list style="min-width: 140px">
                    <q-item clickable v-close-popup class="q-pa-md items-center">
                        <q-icon name="edit" size="16px" class="q-pr-sm"/>
                        <span class="text-body2">Editar</span>
                    </q-item>

                    <q-item clickable v-close-popup class="q-pa-md flex items-center">
                    <q-icon name="delete" size="16px" color="negative" class="q-pr-sm" />
                    <span class="text-body2 text-negative">Excluir</span>
                    </q-item>
                </q-list>
            </q-menu>
          </q-item>
          <q-card-section>
            {{ lorem }}
          </q-card-section>
          <q-separator />
          
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    
    const expanded = ref(false)
    const more = ref(false)
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
</script>

<style scoped>
    .test{
        border: 50px;
    }
</style>