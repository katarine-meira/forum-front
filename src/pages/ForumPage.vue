<template>
    <div class="q-mt-xl">
        <div class="meu-card">
            <input-comp/>
            <feed-comp/>
        </div>
    </div>
</template>

<script setup>
import FeedComp from 'src/components/FeedComp.vue';
import InputComp from 'src/components/InputComp.vue';

</script>

<style scoped>
    .meu-card {
        width: 700px; /* tamanho padrão */
        margin: 0 auto;
        transition: width 0.3s ease;
    }

    /* telas médias (tablets) */
    @media (max-width: 1024px) {
        .meu-card {
            width: 500px;
        }
    }

    /* telas pequenas (celulares) */
    @media (max-width: 600px) {
        .meu-card {
            width: 90%; /* ocupa quase toda a tela */
        }
    }
</style>