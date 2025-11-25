<template>
    <div>
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'" style="height: 70px;">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="q-ml-md">LITEC</q-toolbar-title>

          <q-btn id="links" @click="userLogout">
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
          <q-list >
            <template v-for="(menuItem, index) in menuList.filter(i => !i.down)" :key="index">
              <q-space v-if="index === 3" />
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
          <q-list padding>
            <div class="absolute-bottom full-width">
              <template v-for="(menuItem, index) in menuList.filter(i => i.down)" :key="index">
                <q-space v-if="index === 3" />
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
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useAuthStore } from 'src/store/auth'

const { logout } = useAuthStore()

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
        label: 'Fórum',
        separator: false,
        link: '/forum'
    },
    {
        icon: 'article',
        label: 'Form',
        separator: false,
        link: '/form'
    },
    {
        icon: 'account_circle',
        label: 'Perfil',
        separator: false,
        down: true,
        link: '/profile'
    },
    {
        icon: 'settings',
        label: 'Configurações',
        separator: false,
        down:  true,
        link: '/settings'
    },
    ]

  async function userLogout() {
    try {
      logout()
      route.push('/auth')

      $q.notify({
        color: 'primary',
        type: 'info',
        message: 'Você saiu da sua conta.',
        position: 'top'
      })
    } catch (error) {
      console.error(error)

        $q.notify({
          type: 'negative',
          message: 'Error ao sair.',
          position: 'top'
        })
    }
  }

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