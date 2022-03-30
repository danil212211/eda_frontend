<template>
    <div class="body">
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
        name : "ind"
    }
</script>

<style >
.nav {
    margin-top:10px;
    margin-bottom:10px;
}
html,
.body {
    background-color: #e5e5e5;
}

</style>