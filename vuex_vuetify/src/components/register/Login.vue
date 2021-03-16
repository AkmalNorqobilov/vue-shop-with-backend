<template>
    <v-form v-model="valid" ref="form" lazy-validation class="mt-5">
        
        <v-row justify="center" align-center class="light-blue lighten-4">
            <v-col cols="7">
                <div class="text-center py-3 primary text-h3 text-uppercase font-weight-bold blue--text">
                    Login
                </div>
            </v-col>
            <v-col cols="7">
                <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="[required('Email'), emailRules]"
                    prepend-icon="mdi-email"
                    required
                ></v-text-field>

            </v-col>
            <v-col cols="7">
                <v-text-field
                    label="Password"
                    v-model="password"
                    :rules="[v => !!v || 'Item is required', minLength('Password', 8)]"
                    required
                    :type="isPassword?'password':'text'"
                    prepend-icon="mdi-lock"
                    :append-icon="isPassword?'mdi-eye':'mdi-eye-off'"
                    @click:append="isPassword=!isPassword"
                    counter
                ></v-text-field>

            </v-col>
            <v-col cols="7">
                <v-row justify="center">
                    <v-col cols="12" md="4" lg="5" xl="5">
                        <v-btn
                            @click="submit"
                            :disabled="!valid"
                            block
                            color="success"
                        >
                            submit
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="4" lg="5" xl="5">
                        <v-btn block color="purple lighten-4" @click="clear">clear</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        {{siz}}fsdfwer
    </v-form>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        valid: true,
        email: "",
        password:"",
        isPassword:true,
        emailRules:  v =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail ushbu ko\'rinishda bo\'lsin something@something.com',
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        required(name){ 
            return v => v && v.length>0 ||`${name} bo'sh bo'lmasligi kerak !!!`
        },
        minLength(name, minLength){
            return v=> v && v.length>=minLength || `${name} kamida  ${minLength} ta belgidan iborat bo'lsin!!!`
        },

        maxLength(name, maxLength){
            return v=> v && v.length<=maxLength || `${name} ko'pi bilan  ${maxLength} ta belgidan iborat bo'lsin!!!`
        },
        siz:'',
        baseUrl:''
}),
    destroyed(){
        this.siz = localStorage.getItem('token')
        console.log('destroyed');
    },
   async created(){
       this.baseUrl = this.$store.state.baseBackendUrl;
        await axios.get(`${this.baseUrl}/user/login`)
         .then((res)=>{
             console.log();
             console.log(res.data);
            this.siz= res.data;
         })
         .catch(err=>{
             console.log(err);
         })
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // Native form submission is not yet supported
                axios.post(`${this.baseUrl}/user/login`, {
                    email: this.email,
                    password: this.password,
                })
                .then((res)=>{
                    console.log(res.data);
                    // console.log(localh);
                })
            }
        },
        clear() {
            this.$refs.form.reset();
        }
    }
};
</script>