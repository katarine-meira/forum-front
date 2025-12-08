<template>
    <q-page class="fundo_site">
        <q-img
        src="public/imgs/bannerLitec.png"
        style="height: 400px;"
        />
        <div class="container-padrao">
            <h1 class="q-mt-xl text-h4 text-bold">SÍTES DA INSTITUIÇÃO</h1>
            <div class="row q-col-gutter-md q-mb-xl">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4" v-for="(link, index) in linksList" :key="index">
                    <a :href="link.link" target="_blank">
                        <q-img class="site-card" :src="link.img" style="width: 100%; height: auto;" />
                    </a>
                    <h6 class="q-mt-xs">{{ link.description }}</h6>
                </div>
            </div>
          </div>
          <div class="bloco-fundo-overlay">
            <div class="container-padrao">
              <div class="row q-col-gutter-md  q-pa-xl">
                <div class="hover-img col-12 col-sm-6 col-md-4 col-2-4" v-for="(membro, index) in integrantes" :key="index">
                  <q-img class="membros-card" :src="membro.img" style="width: 100%;" >
                    <div class="column absolute-full overlay flex flex-center">
                      <div class="text-h6 text-white">{{ membro.name }}</div>
                      <div class="text-white" style="font-size: 15px;">{{ membro.cargo }}</div>
                    </div>
                  </q-img>
                </div>
              </div>
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
    const integrantes = [
        {
          cargo: 'Lider',
          name: 'Katarine',
          img: 'public/imgs/integrantes/membroLiga10.jpg'
        },
        {
          cargo: 'Lider',
          name: 'Nycolle',
          img: 'public/imgs/integrantes/membroLiga9.jpg'
        },
        {
          cargo: 'Diretor de Ciências',
          name: 'Bruno',
          img: 'public/imgs/integrantes/membroLiga8.png'
        },
        {
          cargo: 'Diretora de Comunicação',
          name: 'Rafaela',
          img: 'public/imgs/integrantes/membroLiga7.jpg'
        },
        {
          cargo: 'Diretora de Extensão',
          name: 'Samily',
          img: 'public/imgs/integrantes/membroLiga6.jpg'
        },
        {
          cargo: 'Secretário',
          name: 'João Vitor',
          img: 'public/imgs/integrantes/membroLiga5.png'
        },
        {
          cargo: 'Diretor de Comunicação',
          name: 'Daniel',
          img: 'public/imgs/integrantes/membroLiga4.png'
        },
        {
          cargo: 'Diretor Acadêmico',
          name: 'Asafe',
          img: 'public/imgs/integrantes/membroLiga3.png'
        },
        {
          cargo: 'Secretário',
          name: 'Pedro',
          img: 'public/imgs/integrantes/membroLiga2.png'
        },
        {
          cargo: 'Diretora de Comunicação',
          name: 'Tarscilla',
          img: 'public/imgs/integrantes/membroLiga1.png'
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

@media (min-width: 1440px) {
  .col-2-4 {
    width: 20%;
  }
}
.membros-card{
  height: 250px;
}
.hover-img .overlay{
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: 0.3s;
}
.hover-img:hover .overlay {
  opacity: 1;
}
</style>