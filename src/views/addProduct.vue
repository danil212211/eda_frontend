<template>
    <div :style="bgImage" style="height: 100%" class="login">
        <b-container fluid class="bv-example-row" >
            <b-row style="height: 90vh;" align-v="center" align-h="center" >
                <b-col cols="3" class="block shadow-lg" align="center" style="min-width: 400px;">
                    <b-container>
                        <t-header>Давайте добавим карточку</t-header>
                    </b-container>
                    <b-form @submit="addCard()" style="padding:15%; padding-top:0; margin-top:15px;">
                        <t-input v-model="name" placeholder="Название товара" class="mb-2"></t-input>
                        <div class="d-flex">
                            <t-input  v-model="amount" placeholder="Количество товара" class="mb-2"></t-input>
                            <t-form-select v-model="amount_type" :options="optionsType"  style="width:30%; min-width:90px; margin-left: 10px" class="mb-2"></t-form-select>
                        </div>
                        <div class="d-flex mx-auto">
                            <t-input v-model="price" placeholder="Цена" class="mb-2"></t-input>  <div style="margin-left:5px; font-size:1.5rem; color : rgba(0,0,0,0.50)">₽</div>
                        </div>
                        <div class="d-flex mx-auto">
                        <t-input style="height: 100px;" v-model="description" placeholder="Описание" class="mb-2"></t-input>
                        </div>
                            <b-form-tags
                                    id="tags-component-select"
                                    v-model="value"
                                    class="mb-2"
                                    add-on-change
                                    no-outer-focus
                            >
                                <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                                    <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                                        <li v-for="tag in tags" :key="tag" class="list-inline-item">
                                            <b-form-tag
                                                    @remove="remvTag(tag)"
                                                    :title="tag"
                                                    variant="info"
                                            >{{ tag.text }} </b-form-tag>
                                        </li>
                                    </ul>
                                    <b-form-select
                                            @change="inputHandle"
                                            :disabled="disabled || availableOptions.length === 0"
                                            :options="this.options"
                                    >
                                        <template #first>
                                            <!-- This is required to prevent bugs with Safari -->
                                            <option disabled value="">Добавить тэг</option>
                                        </template>
                                    </b-form-select>
                                </template>
                            </b-form-tags>
                        <input class="mb-2" required type="file" @change="handleFileUpload">
                        <t-button type="submit" style="width: 100%;" class="mb-2 btn-submit">Добавить товар</t-button>
                    </b-form>
                </b-col>
            </b-row>
            <b-row style="height: 10vh;" align-v="bottom" align-h="center">
                <b-col cols="2" class="ecosystem">
                    <b-img fluid-grow  :src="require(`@/assets/ekosystem_logo.png`)"></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
    import TFormSelect from "../components/tFormSelect";
    import SubheaderText from "../components/subheaderText";
    export default {
        name: "addProduct",
        components: {SubheaderText, TFormSelect},
        data() {
            return {
                bgImage : {
                    backgroundImage : `url(${require("@/assets/register_bg.png")})`
                },
                options : [],
                value : [],
                name : '',
                amount : '',
                amount_type : '',
                description : '',
                price : '',
                optionsType : [

                    {value: "кг.",text :"кг."},
                    {value: "л.",text :"л."},
                    {value: "шт.",text :"шт."},
                ],
                file : ''
            }
        },
        computed : {
            availableOptions() {
                return this.options.filter(opt => this.value.indexOf(opt) === -1)
            }
        },
        mounted() {
            console.log(this.$store.state);
            let data = {

            };
            this.axios.get(this.backURL+"/tags",data)
                .then(result => {
                    let d=[];
                    console.log('sdfsjdf');
                    result.data.forEach(el => {
                        d.push({
                            'text' : el.name,
                            'value' : el.id
                        });
                    })
                    this.options=d;
                    console.log(this.options);
                })
        },
        methods: {
            inputHandle(e) {
                let a=this.options.find(el => {return el.value===e});
                this.options=this.options.filter(el => {return el.value!==e});
                this.value.push(a);

            },
            remvTag(e) {
                this.value=this.value.filter( el=> {return el!==e});
                this.options.push(e);
                console.log(e);
            },
            handleFileUpload(e) {
            this.file=e.target.files[0];
            console.log(this.file);
            },
            addCard() {
                let data= new FormData();
                let id=this.$route.params.id;
                let headers= {
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    }
                    };
                data.append('image',this.file);
                data.append('name',this.name);
                data.append('amount',this.amount+this.amount_type);
                data.append('description',this.description);
                data.append('price',this.price+'₽');
                for (let i=0 ; i <this.value.length;++i) {
                    data.append(`tags[${i}]`,JSON.stringify(this.value[i]));
                }
                console.log(data);
                this.axios.post(this.backURL+"/shops/"+id+"/add_product",data,headers)
                    .then(response => {
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