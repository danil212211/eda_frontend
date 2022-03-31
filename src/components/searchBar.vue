<template>
    <b-container fluid>
        <div class="btn-custom">
        <input placeholder="Найти еду"  class="txt-input">
            <div class="btn-input">Поиск</div>
        </div>
    </b-container>
</template>

<script>
    import SubheaderText from "./subheaderText";
    export default {
        name: "searchBar",
        components: {SubheaderText}
    }
</script>

<style scoped>
    .btn-custom{
        line-height: 40px;
    }
    .txt-input{
        display: inline-block;
        padding-left: 20px;
        width:70%;
        height:40px;
        border-radius: 10px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border: 2px solid #F33965;
        outline: none;
        font-family: Segoe-UI;
        background-image: url('~@/assets/searchico.svg');
        background-size: auto auto;
        background-position: left center;
        background-position-x: 5px;
        text-indent: 17%;
        background-repeat: no-repeat;
    }
    .txt-input:active{
        outline:none;
    }
    .btn-input{
        display: inline-block;
        padding: 0;
        width:30%;
        height: 100%;
        font-size: 1rem;
        border-radius:10px;
        border-bottom-left-radius:0px;
        border-top-left-radius:0px;
        background-color: #F33965;
        font-family: Segoe-UI-Semibold;
        text-align: center;
        cursor:pointer;
        border: 0px solid #F33965;
        outline:none;

        color:white;

    }
</style>