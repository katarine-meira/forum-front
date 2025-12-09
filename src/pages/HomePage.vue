<template>
    <q-page class="fundo_site">
        <q-img
        src="public/imgs/bannerLitec.png"
        style="height: 400px;"
        />
        <div class="container-padrao">
          <h1 class="text-h4 text-bold marginTop">SÍTES DA INSTITUIÇÃO</h1>
          <div class="row q-col-gutter-md marginBottom">
              <div class="col-12 col-sm-6 col-md-4 col-lg-4" v-for="(link, index) in linksList" :key="index">
                  <a :href="link.link" target="_blank">
                      <q-img class="site-card" :src="link.img" style="width: 100%; height: auto;"/>
                  </a>
                  <h6 class="q-mt-xs barlow-regular">{{ link.description }}</h6>
              </div>
          </div>
        </div>
        <div class="bloco-fundo-overlay">
          <div class="container-padrao">
            <h1 class="q-pt-lg q text-h4 text-bold text-grey-1">QUEM SOMOS?</h1>
            <div class="container-padrao">
              <div class="row q-col-gutter-md  q-pa-mb q-pb-xl">
                <div class="hover-img col-12 col-sm-6 col-md-4 col-2-4" v-for="(membro, index) in integrantesList" :key="index">
                  <q-img class="membros-card" :src="membro.img" style="width: 100%;filter: brightness(0.8);" >
                    <div class="column absolute-full overlay flex flex-center">
                      <div class="text-h6 text-white">{{ membro.name }}</div>
                      <div class="text-white" style="font-size: 13px;">{{ membro.cargo }}</div>
                    </div>
                  </q-img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-padrao">
          <h1 class="text-h4 text-bold marginTop">NOSSOS OBJETIVOS</h1>
          <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(objetivo, index) in objetivoList" :key="index">
                  <q-card flat :bordered="objetivo.borderFalse" class="my-card marginBottom bg-transparent" style="height: 200px;">
                    <q-card-section>
                      <div class="text-h6 barlow-medium">{{objetivo.title}}</div>
                    </q-card-section>

                    <q-separator inset />

                    <q-card-section class="barlow-light">
                      {{ objetivo.description }}
                    </q-card-section>
                  </q-card>
              </div>
          </div>
        </div>
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
    const integrantesList = [
        {
          cargo: 'LIDER',
          name: 'Katarine',
          img: 'public/imgs/integrantes/membroLiga10.jpg'
        },
        {
          cargo: 'LIDER',
          name: 'Nycolle',
          img: 'public/imgs/integrantes/membroLiga9.jpg'
        },
        {
          cargo: 'DIRETOR DE CIÊNCIAS',
          name: 'Bruno',
          img: 'public/imgs/integrantes/membroLiga8.png'
        },
        {
          cargo: 'DIRETORA DE COMUNICAÇÃO',
          name: 'Rafaela',
          img: 'public/imgs/integrantes/membroLiga7.jpg'
        },
        {
          cargo: 'DIRETORA DE EXTENSÃO',
          name: 'Samily',
          img: 'public/imgs/integrantes/membroLiga6.jpg'
        },
        {
          cargo: 'SECRETÁRIO',
          name: 'João Vitor',
          img: 'public/imgs/integrantes/membroLiga5.png'
        },
        {
          cargo: 'DIRETOR DE COMUNICAÇÃO',
          name: 'Daniel',
          img: 'public/imgs/integrantes/membroLiga4.png'
        },
        {
          cargo: 'DIRETOR ACADÊMICO',
          name: 'Asafe',
          img: 'public/imgs/integrantes/membroLiga3.png'
        },
        {
          cargo: 'SECRETÁRIO',
          name: 'Pedro',
          img: 'public/imgs/integrantes/membroLiga2.png'
        },
        {
          cargo: 'DIRETORA DE COMUNICAÇÃO',
          name: 'Tarscilla',
          img: 'public/imgs/integrantes/membroLiga1.png'
        },
    ]
    const objetivoList = [
      {
        title: 'Estudo e Pesquisa',
        description: 'Iremos fazer vários estudos sobre a nossa área, tanto na parte do hardware, software, redes e entre vários outros assuntos.',
        borderFalse: 'false'
      },
      {
        title: 'Eventos e Palestras',
        description: 'Eventos para gerar entretenimento e conhecimento para os alunos do curso e convidados. Também para gerar fundos para a Liga.',
        borderFalse: 'false'
      },
      {
        title: 'Aulas práticas e teóricas',
        description: 'Queremos melhorar as práticas e teórias das aulas e também dos eventos. Fazendo assim, os alunos teremo um contato maior com os assuntos e ganhar mais conhecimento.',
        borderFalse: 'false'
      },
      {
        title: 'Networking',
        description: 'Personalized approaches enhance treatment effectiveness while minimizing potential side effects, leading to better patient experiences and outcomes.',
        borderFalse: 'false'
      }
      ]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow:ital,wght@0,300;0,400;0,500&family=Bebas+Neue&family=Oswald:wght@200..700&family=Roboto+Flex:opsz,wght@8..144,600&display=swap');
*{
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.barlow-light {
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.barlow-regular {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.barlow-medium {
  font-family: "Barlow", sans-serif;
  font-weight: 500;
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
  height: 200px;
}
.hover-img .overlay{
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: 0.3s;
}
.hover-img:hover .overlay {
  opacity: 1;
}
.marginTop{
  margin-top: 100px;
}
.marginBottom{
  margin-bottom: 100px;
}
</style>