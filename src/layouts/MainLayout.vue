<template>
  <q-layout view="hHh LpR lff">
    <navbar-comp/>
    <q-page-container>
      <!-- aqui coloca as pages de home -->
      <router-view></router-view>
    </q-page-container>
    <footer-comp v-if="!$route.meta.hideFooter"/>
  </q-layout>
</template>

<script setup>
// import {ref} from 'vue';
import NavbarComp from 'src/components/NavbarComp.vue';
import footerComp from 'src/components/footerComp.vue';



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Flex:opsz@8..144&display=swap');
 *{
    font-family: "Roboto Flex", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
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

.styleText {
      word-wrap: break-word;
      overflow-wrap: anywhere;
      white-space: pre-wrap;
    }
</style>