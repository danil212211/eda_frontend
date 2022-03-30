<template>
    <b-container fluid>
        <input placeholder="Найти еду"  class="txt-input">
        <button class="btn-input"><t-text style="text-align: center">Поиск</t-text></button>
    </b-container>
</template>

<script>
    export default {
        name: "searchBar"
    }
</script>

<style scoped>
    .txt-input{
        width:70%;
        height: 100%;
        min-height:40px;
        border-radius: 10px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border: 2px solid #F33965;
        outline: none;
        font-family: Segoe-UI;
        background-image: url('~@/assets/searchico.svg');
        background-size: 15% auto;
        background-position: left center;
        background-position-x: 5px;
        text-indent: 17%;
        background-repeat: no-repeat;
    }
    .txt-input:active{
        outline:none;
    }
    .btn-input{
        width:30%;
        height: 100%;
        min-height: 40px;
        border-radius:10px;
        border-bottom-left-radius:0px;
        border-top-left-radius:0px;
        background-color: #F33965;

        border: 2px solid #F33965;
        outline:none;

        color:white;

    }
</style>