<template>
    <q-page class="fundo_site">
        <q-img
        src="public/imgs/bannerLitec.png"
        style="height: 400px;"
        />
        <div style="margin-inline: 150px;" class="">
            <h1 class="q-mt-xl text-h4 text-bold">SÍTES DA INSTITUIÇÃO</h1>
            <div class="row q-col-gutter-md">
                <div class="col-12 col-md-4" v-for="(links, index) in linksList" :key="index">
                    <a :href="links.link" target="_blank">
                        <q-img class="site-card" :src="links.img" />
                    </a>
                </div>
            </div>
        </div>
       
    

    </q-page>
    
</template>

<script setup>
    const linksList = [
        {
          label: 'Portal do Aluno',
          description: 'Site Institucional',
          link: 'https://aluno.uniftc.edu.br/#/home',
          img: '/imgPortalDoAluno.png'
        },
        {
          label: 'Blackboard',
          description: 'Site Institucional',
          link: 'https://ftc.blackboard.com/webapps/bbgs-autosignon-BB5d26151dc6420/autoSignon.do?timestamp=1764688150000&userId=08162361510&auth=5a795b56fdbe90ec9a2b1be9b3cde17e&forward=https://ftc.blackboard.com/webapps/',
          img: '../assets/imgBlackboard.png'
        },
        {
          label: 'Sistema Acadêmico',
          description: 'Site Institucional',
          link: 'https://portalaluno.ftc.br/aonline/AOnline/avisos/T016D.tp',
          img: '../assets/imgLyceum.png'
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
</style>