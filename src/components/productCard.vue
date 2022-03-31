<template>
    <b-container   class="card-product" >
        <b-img center class="img-product"    v-if="img_src!==undefined" :src="require(`@/assets/products/${img_src}.png`)"></b-img>
        <div><subheader-text class="text">{{name}}</subheader-text></div>
        <div><t-text class="text">{{amount}} </t-text></div>
        <div><subheader-text class="text">{{price}} </subheader-text></div>
        <div class="d-flex justify-content-around">
            <div @click="del()" class="box-set" >-</div>
            <div >{{counter}} </div>
            <div @click="add()" class="box-set">+</div>
        </div>
    </b-container>
</template>

<script>
    import SubheaderText from "./subheaderText";
    import HeaderText from "./headerText";
    export default {
        name: "productCard",
        components: {HeaderText, SubheaderText},
        data() {
            return {
                counter : 0,

            }
        },
        mounted() {
            console.log(this.$store.getters.howMuch(this.id));
            this.counter=this.$store.getters.howMuch(this.id);
        },
        computed: {
          changedCounter() {
              return this.$store.getters.howMuch(this.id);
          }
        },
        watch: {
            changedCounter() {
                console.log("Hmm");
                this.counter=this.$store.getters.howMuch(this.id);
            }
        },
        methods : {
            add() {
                this.$store.commit('addProduct',{
                    id:this.id,
                    cost:this.price,
                    name: this.name
                });
              this.counter++;
            },
            del() {
              if (this.counter!==0) {
                  this.counter--;
                  this.$store.commit('deleteProduct',this.id);
              }
            },

        },
        props: {
            id : {
                type : Number,
                required : true
            },
            img_src: {
                type : String,
                required : true
            },
            name: {
                type : String,
                required : true
            },
            amount: {
                type : Number,
                required : true
            },
            price: {
                type: String,
                required : true
            }
        }
    }
</script>

<style scoped>
    .box-set {
        text-align: center;
        line-height: 40px;
        font-family: Segoe-UI-Semibold;
        width:40px;
        height:40px;
        border: 2px solid black;
        border-radius:10px;
        cursor:pointer;
        -webkit-user-select: none;
    }
    .card-product{
        height:230px;
        width:160px;
        border-radius: 20px;
        padding: 0;
        background-color: white;

    }
    .text {
        margin-left :10%;
    }
    .img-product{
        border-radius: 20px;
        width:120px;
        height:100px;
        object-fit:cover;
        padding-top:5px;
    }
</style>