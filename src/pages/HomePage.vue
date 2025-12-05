<template>
    <q-page class="fundo_site">
        <q-img
        src="public/imgs/bannerLitec.png"
        style="height: 400px;"
        />
        <div class="container-padrao">
            <h1 class="q-mt-xl text-h4 text-bold">SÍTES DA INSTITUIÇÃO</h1>
            <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4" v-for="(link, index) in linksList" :key="index">
                    <a :href="link.link" target="_blank">
                        <q-img class="site-card" :src="link.img" style="width: 100%; height: auto;" />
                    </a>
                      <h6 class="q-mt-xs">{{ link.description }}</h6>
                </div>
            </div>
          </div>
          <div>
            <div class="bloco-fundo-overlay q-pa-xl">
              <h2 class="text-white">teste</h2>
              
            </div>
          </div>

        <br><br><br><br><br><br>
    </q-page>
</template>

<script setup>
    const linksList = [
        {
          label: 'Portal do Aluno',
          description: 'Portal do Aluno FTC',
          link: 'https://aluno.uniftc.edu.br/#/home',
          img: 'public/imgs/imgPortalDoAluno.png'
        },
        {
          label: 'Blackboard',
          description: 'Blackboard',
          link: 'https://ftc.blackboard.com/webapps/bbgs-autosignon-BB5d26151dc6420/autoSignon.do?timestamp=1764688150000&userId=08162361510&auth=5a795b56fdbe90ec9a2b1be9b3cde17e&forward=https://ftc.blackboard.com/webapps/',
          img: 'public/imgs/imgBlackboard.png'
        },
        {
          label: 'Sistema Acadêmico',
          description: 'Site Institucional',
          link: 'https://portalaluno.ftc.br/aonline/AOnline/avisos/T016D.tp',
          img: 'public/imgs/imgLyceum.png'
        },
    ]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Oswald:wght@200..700&family=Roboto+Flex:opsz,wght@8..144,600&display=swap');*{
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.fundo_site{
    background-color: #ece8e1;
   
}
.site-card{
  height: 300px;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
}
.site-card:hover {
  transform: scale(1.04);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.20);
}

.container-padrao {
  margin-inline: 150px;
}

/* telas menores que 1200px */
@media (max-width: 1600px) {
  .container-padrao {
    margin-inline: 80px;
  }
}

/* telas menores que 768px */
@media (max-width: 768px) {
  .container-padrao {
    margin-inline: 40px;
  }
}

/* telas menores que 480px (celulares) */
@media (max-width: 480px) {
  .container-padrao {
    margin-inline: 16px;
  }
}

.bloco-fundo-overlay {
  position: relative;
  min-height: 350px;
  background: linear-gradient(135deg, #1A237E, #172380, #3F51B5, #3548b3);
  background-size: cover;
  background-position: center;
}
</style>