<template>
    <b-container style="padding:0;" fluid >
        <b-row>
            <carousel id="shopCard" :settings="shopSettings">
                <slide class="shop-slide"  v-for="shop in shops"    >
                    <a class="shop-slide-element">
                        <b-img class="img-card" style="height:100%; width:100%" v-if="getImage(shop.logo_src)!==undefined" :src="getImage(shop.logo_src)"></b-img>
                    </a>
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>

        </b-row>

    </b-container>

</template>

<script>
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    import ShopCard from "../components/shopCard";

    export default {
        name : "shopCard",
        components : {
            ShopCard,
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        data() {
            return {
                shop : {},
                shops: {},
                shopSettings : {
                    itemsToShow: 5,
                    itemsToScroll : 3,
                    transition : 1000,
                    mouseDrag: false,
                    touchDrag: false,

                    snapAlign : 'center'
                }
            }
        },
        methods : {
            getImage(image) {
                try {
                    return require(`@/assets/${image}.png`);
                } catch(e) {
                    return undefined;
                }
                },
            getShops() {
                let data = {
                    params: {
                        id:10
                    }

                };
                this.axios.get(this.backURL+"/shops",data)
                    .then(response => {
                        this.shops=response.data;
                        console.log(response.data);
                    });
            }
        },
        mounted : function() {
            this.getShops();
        }
    }
</script>

<style>
    .img-card{
        border-radius:20px;
    }
    #shopCard {
        padding : 0;
    }
     .shop-slide{
        padding-right:23px;

    }
    .shop-slide-element{

        height: 126px;
        width: 100%;
        background-color: #F33965;
        font-size: 20px;
        border-radius: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
     #shopCard .carousel__next--in-active,
     #shopCard .carousel__prev--in-active{
         display: none;
     }
    #shopCard .carousel__next,
    #shopCard .carousel__prev{
        background-color: white;
        box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.334);

    }
    #shopCard .carousel__next{
        margin-right:15px;
    }

     #shopCard .carousel__prev{
         margin-left:10px;
     }
     #shopCard .carousel__icon{
        fill:black;
    }
</style>