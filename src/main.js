import { createApp } from 'vue';
import App from './App.vue';
import indexView from "@/views/ind";
import registerView from "@/views/register";
import loginView from "@/views/login"
import shopView from "@/views/shop";
import axios from 'axios';
import navigationBar from "@/components/navigationBar";
import VueAxios from 'vue-axios';
import * as VueRouter from 'vue-router';

import VueCookies from 'vue3-cookies'
import BootstrapVue3 from "bootstrap-vue-3";
import searchBar from "@/components/searchBar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import discountCard from "@/components/discountCard";
import shopCard from "@/components/shopCard";
import tHeader  from "@/components/headerText";
import tInput from "@/components/tInput";
import tSubheader from "@/components/subheaderText";
import tText from "@/components/textText";
import tButton from "@/components/tButton";
import createPersistedState from "vuex-persistedstate";

import {createWebHistory} from "vue-router";
import addProduct from "@/views/addProduct";
import {createStore} from "vuex";
const pr = require("@/stores/productBin");
const app = createApp(App);
const backendBaseUrl="http://nekodaze.ru:3000";
const routes = [
    { path : "/" , component: indexView},
    { path : "/register", component : registerView},
    { path : "/login", component : loginView},
    { path : "/shop/:id", component: shopView },
    { path : "/shop/:id/add_product" , component : addProduct}
];
const store = createStore({
    state() {
        return {
            products: [ ],
            hideBin : false
        }
    },
    plugins: [createPersistedState()],
    mutations: {
        hideBin(state) {
            state.hideBin=true;
        },
        showBin(state) {
            state.hideBin=false;
        },
        addProduct(state, product) {
            product.id=Number.parseInt(product.id);
            product.cost=Number.parseInt(product.cost);
            let id=undefined;
            let ind2=0;
            this.state.products.forEach( element => {
                if (element.id ===product.id) id=ind2;
                ind2++;
            });
            if (id!==undefined  && id!==-1) {
                console.log(id);
                this.state.products[id].cnt++;
            } else
            state.products.push({
                id: product.id,
                cost: product.cost,
                name : product.name,
                cnt : 1
            });
        },
        delBin(state) {
            state.products=[];
        },
        deleteProduct(state, id) {
            let d2=[];
            let ch=false;
            state.products.forEach(element => {
                if (element.id == id) {
                    element.cnt--;
                }
            });
            state.products.forEach(element => {
                if (element.cnt>0) d2.push(element);
            });
            state.products=d2;
        }
    },
    getters: {
        howMuch: (state) => (id) => {
            let counter=0;
            state.products.forEach(element => {
                if (element.id == id) {
                    counter=element.cnt;
                }
            });
            return counter;

        },
        getCost(state) {
            let counter = 0;
            state.products.forEach(element => {
                counter+=Number.parseInt(element.cost*element.cnt);
            });
            return counter;
        }
    }
});
const router = VueRouter.createRouter({
    history :createWebHistory(),
    routes : routes
});
app.config.devtools=true;
app
    .component('t-header',tHeader)
    .component('t-input',tInput)
    .component('t-subheader',tSubheader)
    .component('t-text',tText)
    .component('t-button',tButton)
    .component('t-card',shopCard)
    .component('t-navbar',navigationBar)
    .component('t-discount',discountCard)
    .component('t-searchbar',searchBar);
app.use(router);
app.use(BootstrapVue3);
app.use(VueCookies);
app.use(store);
app.config.globalProperties.backURL=backendBaseUrl;
app.use(VueAxios,axios);
app.mount('#app');