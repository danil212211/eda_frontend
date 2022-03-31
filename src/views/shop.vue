<template>
    <navigation-bar class="nav" :logo="this.shopLogo"></navigation-bar>
    <b-container fluid>
        <b-row>

                <b-col class="mb-2" cols="12" sm="4" md="4" lg="2" v-if="cards.length>0" v-for="card in cards">
                    <product-card  :id="Number.parseInt(card.id)" :amount="card.amount" :name="card.name" :price="card.cost" :img_src="card.image_src"></product-card>

                </b-col>
        </b-row>
        <b-row>

        </b-row>
    </b-container>
</template>

<script>
    import NavigationBar from "../components/navigationBar";
    import ProductCard from "../components/productCard";
    export default {
        data() {
            return {
              shopLogo : "",
                cards : []
            }
        },
        name: "shopView",
        components: {ProductCard, NavigationBar},
        mounted() {

            let id=this.$route.params.id;
            console.log(id);
            if (id!==undefined && id!==null) {
                console.log("Hmm");
                let data= {
                    id: id
                };
                this.axios.get(this.backURL+"/shops/"+id+"/products",data)
                    .then(response=> {
                        this.cards=response.data;

                        console.log(this.cards);
                    });

                this.axios.get(this.backURL+"/shops/"+id,data)
                    .then(response =>{
                        console.log(response.data);
                        this.shopLogo=response.data[0].logo_src;
                    })
            }
        }
    }
</script>

<style scoped>
    .nav {
        margin-top:10px;
        margin-bottom:10px;
    }
</style>