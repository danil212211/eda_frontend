<template>
        <b-container style="width:100%">
            <b-row align-v="center" >
                <b-col cols="12" md="4" lg="3" >
                   <b-img class="logo-eda" @click="goToInd" fluid  :src="require(`@/assets/logo.png`)"></b-img>
                </b-col>
                <b-col  cols="12"  md="4" lg="3" v-if="logo!=='' && logo!==undefined" >
                    <b-img center class="logo-shop" fluid :src="require(`@/assets/${logo}.png`)"></b-img>
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
        name: "navigationBar",
        props: {
            logo : {
                type : String,
                required : false
            },

        },
        methods :{
            goToInd: function () {
                this.$router.push('/');
            }
        },
        mounted() {
            console.log(this.logo);
        }
    }
</script>

<style scoped>
    .vrtc-line,.logo-shop {
     }
    .vrtc-line{
        float:left;
        width:1px;
        height:100px;

        background-color: #707070;
     }
    .logo-eda {

        cursor:pointer;
    }
    .logo-shop {
        float:right;
        border-radius :20px;
    }
</style>