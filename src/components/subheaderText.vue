<template>
    <h><slot></slot></h>
</template>

<script>
    export default {
        name: "subheaderText"
    }
</script>

<style scoped>
    @font-face {
        font-family: "Segoe-UI-Semibold";
        src: local("Segoe-UI-Semibold"),   url("@/assets/fonts/Segoe-UI-Semibold.ttf") format("truetype");
    }
    h {
        font-family: Segoe-UI-Semibold;
        font-size:1rem;
    }
</style>