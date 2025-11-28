<template>
    <div class="fundo_site q-pa-none">
        <q-img
        src="../assets/bannerLitec.png"
        style="height: 400px; width: 100%;"
        fit="cover"
        />
        <div>
        <h1 class="q-ml-xl text-h3">SITES DA INSTITUIÇÃO</h1>
        <div class="row">
            <div class="col-6">

            </div>
            <div class="col-6">
                
            </div>
        </div>
        </div>
    </div>
    <footer-comp/>
</template>

<script setup>
import footerComp from 'src/components/footerComp.vue';

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@200..700&family=Roboto+Flex:opsz,wght@8..144,600&display=swap');
*{
  font-family: "Roboto Flex", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings:
    "slnt" 0,
    "wdth" 100,
    "GRAD" 0,
    "XOPQ" 96,
    "XTRA" 468,
    "YOPQ" 79,
    "YTAS" 750,
    "YTDE" -203,
    "YTFI" 738,
    "YTLC" 514,
    "YTUC" 712;
}
.fundo_site{
    background-color: #ece8e1;
    min-height: 90vh;
    padding: 0px;
}
</style>