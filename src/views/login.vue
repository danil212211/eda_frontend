<template>
    <div :style="bgImage" class="login">
        <b-container fluid class="bv-example-row">
            <b-row style="height: 90vh;" align-v="center" align-h="center" >
                <b-col cols="4" class="block shadow-lg" align="center">
                    <b-img fluid style="width:50%; padding-top:25px;" :src="require(`@/assets/logo.png`)"></b-img>
                    <b-container>
                        <t-header>добро пожаловать!</t-header>
                    </b-container>
                    <b-form @submit="loginUser()" style="padding:15%; padding-top:0; margin-top:15%;">
                        <t-input v-model="email" placeholder="Почта\Логин" class="mb-2"></t-input>
                        <t-input type="password" v-model="password" placeholder="Пароль" class="mb-2"></t-input>
                        <t-button type="submit" style="width: 100%;" class="mb-2 btn-submit">Вход</t-button>
                    </b-form>
                    <b-container v-if="notLog===1">Ошибка входа</b-container>
                    <b-container v-if="notLog===2">Успешный вход! Перенаправляю на главную...</b-container>
                </b-col>
            </b-row>
            <b-row style="height: 10vh;" align-v="bottom" align-h="center">
                <b-col cols="2" class="ecosystem">
                    <b-img fluid  :src="require(`@/assets/ekosystem_logo.png`)"></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import TInput from "../components/tInput";
    import TButton from "../components/tButton";
    export default {
        name: "login",
        components: {TButton, TInput},
        data() {
            return {
                bgImage : {
                    backgroundImage : `url(${require("@/assets/register_bg.png")})`
                },
                email : "",
                password : "",
                notLog : 0

            }
        },
        methods : {
            loginUser() {
                this.notLog=0;
                var data= {
                    params : {
                        "email": this.email,
                        "pass": this.password
                        }
                    };
                var headers = {
                    "Access-Control-Allow-Origin": "*"
                };
                this.axios
                    .get(this.backURL+"/login",data,headers)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.code===200) {
                            this.$cookies.set("hash",response.data.hash);
                            this.notLog=2;
                        } else {
                            this.notLog=1;
                        }
                    })

            }
        }

    }
</script>

<style scoped>
    .btn-submit {
        background-color: #F33965;
        border : 2px solid #F33965;
    }
    .btn-submit:focus {
        background-color: #F33965;
        border : 2px solid #F33965;
    }
    .btn-submit:hover  {
        background-color: #F42356;
        border : 2px solid #F33965;

    }
    .login {
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0 3px black;
        background-position: center center;
        height: 100vh;
    }
    .block {
        border-radius: 43px;
        ;
        background-color: #fff;
        height:508px;

    }
</style>