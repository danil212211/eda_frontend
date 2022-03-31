<template>
    <h><slot></slot></h>
</template>

<script>
    export default {
        name: "tInput"
    }
</script>
<style scoped>
    @font-face {
        font-family: "Segoe-UI";
        src: local("Segoe-UI"),   url("@/assets/fonts/Segoe-UI-Semibold.ttf") format("truetype");
    }
    h {
        font-family: Segoe-UI;
        font-size:0.85rem;
    }
</style>