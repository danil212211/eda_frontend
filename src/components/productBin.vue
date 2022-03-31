<template>
    <b-container v-if="this.$store.state.products.length>0" class="bin" >
        <div class="d-flex"><t-button style="width:100px; border:none; margin-top:20px; background-color: #F33965; height:40px;" @click="this.$store.commit('hideBin')">свернуть</t-button></div>
        <header-text>Корзина!</header-text>
        <div v-for="product in this.$store.state.products">
            <div>
                {{product.name}} - {{product.cost}} ₽ x {{product.cnt}} = {{product.cost*product.cnt}}
            </div>
        </div>

        <div  class="align-bottom">Выходящая цена - {{this.$store.getters.getCost}} </div>
        <t-button style="border:none ; background-color: #F33965" @click="this.$bvModal.show('modal')">Заказать</t-button>
    </b-container>
    <b-modal centered id="modal" hide-footer>
        <template #modal-title>
            Using <code>$bvModal</code> Methods
        </template>
        <b-container style="height: 100px; align-self: center " fluid class="d-block text-center">
            <header-text>Спасибо за покупку!</header-text>
            <t-button style="border:none; background-color: #F33965" center  block @click="bought">Продолжить покупки</t-button>

        </b-container>
    </b-modal>
</template>

<script>
    import HeaderText from "./headerText";
    import TButton from "./tButton";
    export default {
        name: "productBin",
        components: {TButton, HeaderText},
        methods : {
            bought() {
                this.$store.commit('delBin');
                this.$bvModal.hide('modal');
            }
        }
    }
</script>

<style scoped>
    .bin {
        text-align: center;
        width:300px;
        min-height: 300px;
        right: 0px;
        border-radius: 50px;
        bottom: 0;
        position: fixed;
        background-color: white;
    }
</style>