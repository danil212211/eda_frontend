<template>
    <router-view class="view-app"></router-view>
    <product-bin v-if="hide===false"></product-bin>
    <b-container v-if="hide===true" style="position:fixed; bottom:0;right:0; height: 60px; width :120px;">
        <div @click="showBin" class="mt-auto mr-auto p-2" style="height:60px; right:0; width:100px; text-align: center; background-color: white; border-radius: 20px; border-bottom-right-radius: 0; border-bottom-left-radius: 0" >Показать корзину</div>
    </b-container>
</template>


<script>
    import ProductBin from "./components/productBin";
    export default {
        components: {ProductBin},
        computed : {
          hide : function() {
              return this.$store.state.hideBin;
          }
        },
        methods: {
            showBin() {
                console.log("12343");
                this.$store.commit('showBin');
                this.hide=this.$store.state.hideBin;

            }
        },
        mounted() {
            console.log(this.hide);
        }
    }
</script>
<style>
    @font-face {
        font-family: "Segoe-UI-Semibold";
        src: local("Segoe-UI-Semibold"),   url("@/assets/fonts/Segoe-UI-Semibold.ttf") format("truetype");
    }

    html,
    #app{
        background-color: #e5e5e5;

    }
</style>