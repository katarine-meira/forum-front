<template>
    
        <!-- Coluna lateral -->
        <div class="col-12 col-md-4">
          <div class="q-ma-md">
            <q-card bordered flat>
              <q-card-section class="text-center">
                <div class="text-h6">Katarine Oliveira</div>
                <q-btn flat color="primary"> 
                    <q-icon class="q-pr-xs" name="edit" size="18px" />
                    <label for="">Editar perfil</label>
                </q-btn>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <div class="text-subtitle2 q-mb-sm">Sobre</div>
                <q-list dense>
                  <q-item>
                    <q-item-section>Sobre você</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="badge" /></q-item-section>
                    <q-item-section>Estudante</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon name="school" /></q-item-section>
                    <q-item-section>Seu semestre</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-linkedin" /></q-item-section>
                    <q-item-section>Seu Linkedin </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon size="20px" name="fa-brands fa-github" /></q-item-section>
                    <q-item-section>Seu GitHub</q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar><q-icon  name="psychology" /></q-item-section>
                    <q-item-section>Habilidades</q-item-section>
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
        </div>
</template>
<script setup>

</script>