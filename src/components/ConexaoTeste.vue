<template>
  <q-page class="q-pa-md bg-grey-1">
    <div class="text-h4 q-mb-md text-primary">Teste de Conexão Frontend/Backend</div>
    <q-card flat bordered class="q-pa-lg">
      <div class="text-h6 q-mb-md">Resultados da API (http://localhost:3000/users)</div>

      <!-- Botão de Ação -->
      <q-btn 
        label="Buscar Usuários (API)" 
        color="primary" 
        icon="cloud_download"
        @click="fetchUsers"
        :loading="loading"
        class="q-mb-md"
      />

      <!-- Indicador de Status -->
      <q-banner v-if="successMessage" dense rounded class="bg-green-1 text-green-8 q-mb-md">
        <template v-slot:avatar>
          <q-icon name="check_circle" />
        </template>
        {{ successMessage }}
      </q-banner>
      
      <q-banner v-if="errorMessage" dense rounded class="bg-red-1 text-red-8 q-mb-md">
        <template v-slot:avatar>
          <q-icon name="warning" />
        </template>
        {{ errorMessage }}
      </q-banner>

      <!-- Exibição dos Dados -->
      <q-list bordered separator rounded class="q-mt-md">
        <q-item v-if="users.length === 0 && !loading && !errorMessage">
          <q-item-section>Nenhum dado de usuário carregado. Clique em Buscar Usuários.</q-item-section>
        </q-item>
        
        <q-item v-for="(user, index) in users" :key="index">
          <q-item-section avatar>
            <q-icon name="person" color="grey-7" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold">ID: {{ user.id || 'N/A' }}</q-item-label>
            <q-item-label caption v-if="user.name">Nome: {{ user.name }}</q-item-label>
            <q-item-label caption v-if="user.email">Email: {{ user.email }}</q-item-label>
            <q-item-label caption v-if="!user.name && !user.email">
              Dados JSON: {{ user }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
// Usando a Options API para simplificar o acesso ao this.$api e this.$q
export default {
  name: 'ConexaoTeste',
  data() {
    return {
      users: [],
      loading: false,
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';
      this.users = [];

      try {
        // Usa a instância $api configurada com a baseURL 'http://localhost:3000'
        const response = await this.$api.get('/user'); 
        
        this.users = response.data;

        this.successMessage = `Sucesso! Foram carregados ${this.users.length} registros da API.`;

        // Notificação Quasar para feedback
        this.$q.notify({
          type: 'positive',
          message: 'Dados carregados com sucesso!',
          timeout: 2000
        });

      } catch (error) {
        let message = 'Erro de conexão ou servidor. Verifique se o NestJS está rodando na porta 3000 e se o CORS está configurado.';
        
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um status code que está fora do 2xx
          message = `Erro na API: Status ${error.response.status}. Detalhes: ${error.response.data.message || 'Erro desconhecido.'}`;
        } else if (error.request) {
          // A requisição foi feita mas não houve resposta (servidor desligado ou CORS)
          message = 'Nenhuma resposta da API. Verifique se o NestJS está ativo.';
        }
        
        this.errorMessage = message;
        
        this.$q.notify({
          type: 'negative',
          message: 'Falha na conexão: ' + (error.response?.status || 'Sem resposta'),
          timeout: 5000
        });

      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>