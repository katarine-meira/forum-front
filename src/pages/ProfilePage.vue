<template>
  <q-page class="bg-grey-1">
    <!-- Banner -->
    <div class="relative-position">
      <q-img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        class="banner"
      />
      <div class="absolute-full flex flex-center">
        <q-avatar size="100px" class="avatar shadow-2">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="q-pa-lg">
      <div class="row q-col-gutter-lg">
        <!-- Coluna lateral -->
        <div class="col-12 col-md-3">
          <q-card>
            <q-card-section class="text-center">
              <div class="text-h6">Katarina Oliveira</div>
              <div class="text-caption text-grey">Gerenciar sua conta</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <div class="text-subtitle2 q-mb-sm">Sobre</div>
              <q-list dense>
                <q-item>
                  <q-item-section avatar><q-icon name="work" /></q-item-section>
                  <q-item-section>Seu cargo</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar><q-icon name="apartment" /></q-item-section>
                  <q-item-section>Seu departamento</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar><q-icon name="location_on" /></q-item-section>
                  <q-item-section>Sua localização</q-item-section>
                </q-item>

                <q-item>
                  <q-item-section avatar><q-icon name="email" /></q-item-section>
                  <q-item-section>katarinemeiraoli@gmail.com</q-item-section>
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

        <!-- Coluna principal -->
        <div class="col-12 col-md-9">
          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Trabalhou</div>
              <div class="text-caption text-grey">
                Nenhum trabalho aqui
              </div>
            </q-card-section>
          </q-card>

          <q-card class="q-mb-md">
            <q-card-section>
              <div class="text-h6">Locais onde você trabalha</div>
              <div class="text-caption text-grey">
                Ainda não há lugares para mostrar
              </div>
            </q-card-section>
          </q-card>

          <q-card>
            <q-card-section>
              <div class="text-h6">Estrutura organizacional</div>
              <div class="text-caption text-grey">
                Ver gerente e membros da equipe
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.banner {
  height: 160px;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
}

.avatar {
  border: 4px solid white;
  transform: translateY(50%);
}

/* Responsivo */
@media (max-width: 768px) {
  .banner {
    height: 120px;
  }
  .avatar {
    size: 80px;
    transform: translateY(40%);
  }
}
</style>
