import { createApp } from 'vue';
import App from './App.vue';
import ind from "@/views/ind";
import register from "@/views/register";
import login from "@/views/login"
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
import {createWebHistory} from "vue-router";
const app = createApp(App);
const backendBaseUrl="http://127.0.0.1:3000";
const routes = [
    { path : "/" , component: ind},
    { path : "/register", component : register},
    { path : "/login", component : login}
];
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
app.config.globalProperties.backURL=backendBaseUrl;
app.use(VueAxios,axios);
app.mount('#app');