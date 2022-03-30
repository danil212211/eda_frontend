<template>
    <b-button  class="b-b"><slot></slot></b-button>
</template>

<script>
    export default {
        name: "tButton"
    }
</script>
<style scoped>
    @font-face {
        font-family: "Segoe-UI";
        src: local("Segoe-UI"),   url("../assets/fonts/Segoe-UI-Semibold.ttf") format("truetype");
    }
    .b-b {
        font-family: Segoe-UI;
        font-size:1rem;
        border-radius:10px;
        text-align: center;
        border-width:2px;

    }
</style>