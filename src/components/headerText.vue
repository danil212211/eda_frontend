<template>
    <div><slot></slot></div>
</template>

<script>
    export default {
        name: "headerText"
    }
</script>

<style scoped>

    @font-face {
        font-family: "Gilroy-ExtraBold";
        src: local("Gilroy-ExtraBold"),   url("../assets/fonts/Gilroy-ExtraBold.ttf") format("truetype");
    }
    div {
        font-family: Gilroy-ExtraBold;
        font-size:2rem;
    }
</style>