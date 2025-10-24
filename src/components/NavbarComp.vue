<template>
    <div>
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>ForumDev</q-toolbar-title>

          <q-btn id="links" to="/auth">
           <q-icon name="logout" />
           Sair
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"

        :width="200"
        :breakpoint="620"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="route.path === menuItem.link" v-ripple :to="menuItem.link" :class="menuItem.class">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

    const $q = useQuasar()
    const route = useRouter();

    const drawer = ref(false)
    const miniState = ref(true)
    
    const menuList = [
    {
        icon: 'home',
        label: 'Home',
        separator: true,
        link: '/home'
    },
    {
        icon: 'chat',
        label: 'Forum',
        separator: false,
        link: '/forum'
    },
    ]
</script>

<style scoped>
    #nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .router_logo {
        margin: auto;
        margin-left: 0;
    }
    #logo {
        width: 80px;
        height: 80px;
    }
    #links {
        text-decoration: none;
        margin: 12px;
    }
    #links:hover {
        color: white;
    }
</style>