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
        src: local("Segoe-UI"),   url("../assets/fonts/Segoe-UI-Semibold.ttf") format("truetype");
    }
    input {
        font-family: Segoe-UI;
        font-size:1rem;
        border-radius:10px;
        text-align: center;
        border-width:2px;

    }
    h {
        font-family: Segoe-UI;
        font-size:1rem;
    }
</style>