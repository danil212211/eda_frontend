<template>
    <div>
    <t-navbar class="nav"></t-navbar>
    <b-container >
        <t-header>Магазины возле вас</t-header>
        <t-card></t-card>
    </b-container>
    <b-container>
        <t-header> Акции</t-header>
        <t-discount></t-discount>
    </b-container>
    </div>
</template>

<script>
    export default  {
        name : "indexView"
    }
</script>

<style scoped>
.nav {
    margin-top:10px;
    margin-bottom:10px;
}


</style>