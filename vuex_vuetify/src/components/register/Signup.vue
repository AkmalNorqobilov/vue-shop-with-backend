<template>
    <v-form v-model="valid" ref="form" lazy-validation class="mt-5">
        
        <v-row justify="center" align-center class="light-blue lighten-4">
            <v-col cols="7">
              
                
                <div class="text-center py-3 primary text-h3">
                    Signup
                </div>
            </v-col>
            <v-col cols="7">
                <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    prepend-icon="mdi-account"
                    required
                ></v-text-field>
            </v-col>

            <v-col cols="7">
                <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="[required('Email'),emailRules]"
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
                <v-checkbox
                    label="Do you agree?"
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    required
                ></v-checkbox>

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
                        {{error}} qiymati
                        <v-btn block color="purple lighten-4" @click="clear">clear</v-btn>
                      <v-alert v-if="error" class="mt-5" type="error" close="mdi-window-close" border="bottom" dismissible @click:dismissible="error=null" elevation="24">
                        {{error}}
                    </v-alert>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-form>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        valid: true,
        name: "",
        nameRules: [v => !!v || "Name is required", v => (v && v.length <= 10) || "Name must be less than 10 characters"],
        email: "",
        emailValid: true,
        password:"",
        isPassword:true,
        isValid(){
            return this.emailValid|| "mavjud bo'lgan foydalanuvchi"
        },
        emailRules:  v =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail ushbu ko\'rinishda bo\'lsin something@something.com',
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false,
        required(name){ 
            return v => v && v.length>0 ||`${name} bo'sh bo'lmasligi kerak !!!`
        },
        minLength(name, minLength){
            return v=> v && v.length>=minLength || `${name} kamida  ${minLength} ta belgidan iborat bo'lsin!!!`
        },

        maxLength(name, maxLength){
            return v=> v && v.length<=maxLength || `${name} ko'pi bilan  ${maxLength} ta belgidan iborat bo'lsin!!!`
        },
        // emailRules:  v =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail ushbu ko\'rinishda bo\'lsin something@something.com'
        baseUrl:'',
        error:null
}),
    created(){
        this.baseUrl = this.$store.state.baseBackendUrl
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                // Native form submission is not yet supported
              await  axios.post(`${this.baseUrl}/user/signup`, {
                    username: this.name,
                    email: this.email,
                    password: this.password,
                    // checkbox: this.checkbox
                }).then((res)=>{
                    console.log(res.data);
                    localStorage.setItem('user', res.data);
                    console.log(localStorage.getItem('user'));
                    this.$router.push('/login');
                })
                .catch(err=>{
                    console.log(err);
                    this.error = "ushbu foydalanuvchi mavjud"
                })
            }
        },
        clear() {
            this.$refs.form.reset();
        }
    }
};
</script>