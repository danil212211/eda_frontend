<template>
    <div :style="bgImage" class="login">
        <b-container fluid class="bv-example-row">
            <b-row style="height: 90vh;" align-v="center" align-h="center" >
                <b-col cols="4" class="block shadow-lg" align="center">
                    <b-img fluid style="width:50%; padding-top:25px;" :src="require(`@/assets/logo.png`)"></b-img>
                    <b-container>
                        <t-header>добро пожаловать!</t-header>
                    </b-container>
                    <b-form @submit="registerUser()" style="padding:15%; padding-top:0; margin-top:15%;">
                        <t-input v-model="login" placeholder="Логин" class="mb-2"></t-input>
                        <t-input type="email" v-model="email" placeholder="Почта" class="mb-2"></t-input>
                        <t-input type="password" v-model="password" placeholder="Пароль" class="mb-2"></t-input>
                        <t-button type="submit" style="width: 100%;" class="mb-2 btn-submit">Регистрация</t-button>
                    </b-form>
                    <b-container v-if="isReg===1">Успешная регистрация, проверьте свою почту для подверждения аккаунта</b-container>

                    <b-container v-if="isReg===2">Ошибка регистрации</b-container>
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
        name: "register",
        components: {TButton, TInput},
        data() {
            return {
                bgImage : {
                    backgroundImage : `url(${require("@/assets/register_bg.png")})`
                },
                email : "",
                password : "",
                login : "",
                isReg : 0

            }
        },
        methods : {
            registerUser() {
                if (this.email==="" || this.login==="" || this.pass==="") return ;
                this.notLog=0;
                var data= {
                    "email": this.email,
                    "login": this.login,
                    "pass" : this.password
                };
                var headers = {
                    "Access-Control-Allow-Origin": "*"
                };
                this.axios
                    .post(this.backURL+'/register', data , headers)
                    .then(response => {
                        console.log(response.data);
                        if (response.data.code===200) {
                            this.isReg=1;
                        } else {
                            this.isReg=2;
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