<template>
    <div class="fundo_site q-pa-none">
        <h1 class="q-ma-none"></h1>
       
    </div>
    <q-footer elevated class="color_footer">
        <q-toolbar>
          <q-toolbar-title class="text-4 text-center q-pa-sm">Liga Acadêmica de Tecnologia &copy; {{ano_atual}}</q-toolbar-title>
        </q-toolbar>
    </q-footer>
</template>

<script setup>
    var ano_atual = new Date().getFullYear()
</script>

<style scoped>
.fundo_site{
    background-color: #ece8e1;
    min-height: 90vh;
    padding: 0px;
}
.color_footer{
    background-color: #1a112b;
}
</style>