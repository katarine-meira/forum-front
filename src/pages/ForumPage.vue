<template>
    <div class="q-pa-none absolute-center">
        <div class="estiloCard">
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
    @media (max-width: 600px) {
        .estiloCard{ 
            width: 90vw !important;
        }
    }
</style>