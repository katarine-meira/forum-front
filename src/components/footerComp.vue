<template>
    <q-footer elevated class="color_footer">
        <q-toolbar>
          <q-toolbar-title style="font-size: 18px; height: 100px;" class="flex flex-center q-pa-sm">Liga Acadêmica de Tecnologia &copy; {{ano_atual}}</q-toolbar-title>
        </q-toolbar>
    </q-footer>
</template>

<script setup>
    var ano_atual = new Date().getFullYear()
</script>

<style scoped>
.color_footer{
    background-color: #161f47;
}
</style>