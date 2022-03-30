<template>
    <b-container style="padding: 0" fluid >
        <b-row>
            <carousel id="discountCard" :settings="shopSettings">
                <slide class="discount-slide"  v-for="discount in discounts"   >
                    <div class="discount-slide-element" >
                        Скидка - {{discount.id}}
                    </div>
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
        name : "discountCard",
        components : {
            ShopCard,
            Carousel,
            Slide,
            Pagination,
            Navigation
        },
        data() {
            return {
                discounts: {},
                shopSettings : {
                    itemsToShow: 6,
                    transition : 700,
                    itemsToScroll : 3,
                    snapAlign : 'center'
                }
            }
        },
        methods : {
            getDiscounts() {
                this.discounts=  [
                    {
                        id :1
                    },
                    {
                        id :2
                    },
                    {
                        id :3
                    },
                    {
                        id :4
                    },
                    {
                        id :5
                    },
                    {
                        id :6
                    },
                    {
                        id :7
                    },
                    {
                        id: 8
                    }
                ];
            }
        },
        mounted : function() {
            this.getDiscounts();
            console.log(this.shops);
        }
    }
</script>

<style>
    #discountCard {
        padding : 0;
    }
    .discount-slide{
        padding-right:23px;
    }
    .discount-slide-element{
        height: 161px;
        width:100%;
        background-color: #F33965;
        font-size: 20px;
        border-radius: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #discountCard .carousel__next--in-active,
    #discountCard .carousel__prev--in-active{
        display: none;
    }
    #discountCard .carousel__next,
    #discountCard .carousel__prev{
        background-color: white;
        box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.334);

    }
    #discountCard .carousel__next{
        margin-right:15px;
    }

    #discountCard .carousel__prev{
        margin-left:10px;
    }
    #discountCard .carousel__icon{
        fill:black;
    }
</style>