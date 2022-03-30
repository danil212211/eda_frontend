<template>
        <b-container style="width:100%">
            <b-row align-v="center">
                <b-col cols="2" >
                    <b-img fluid  :src="require(`@/assets/logo.png`)"></b-img>
                </b-col>
                <b-col class="input-col" cols="4" >
                    <t-searchbar></t-searchbar>
                </b-col>
                <b-col>

                </b-col>
            </b-row>
        </b-container>
</template>

<script>
    export default {
        name: "navigationBar"
    }
</script>

<style scoped>
</style>