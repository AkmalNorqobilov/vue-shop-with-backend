<template>
  <div class="home">
   <v-app-bar  color="green" app flat  dark>
          <v-app-bar-nav-icon @click="drawer=!drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-title>Actions</v-toolbar-title>
          <v-spacer></v-spacer>
         <v-btn-toggle mandatory class="hidden-sm-and-down">
            <v-btn color="green darken-2" @click="$router.push('/')">
            <v-icon left>mdi-home</v-icon>Home
          </v-btn>
          <v-btn color="green darken-2" @click="$router.push('/signup')">
            <v-icon left>mdi-account-plus</v-icon>Signup
          </v-btn>
          <v-btn color="green darken-2" @click="$router.push('/login')">
            <v-icon left>mdi-login</v-icon> Login
          </v-btn>
         </v-btn-toggle>
        </v-app-bar>
        
        <v-navigation-drawer  class="green lighten-3"  app  v-if="drawer" v-model="drawer" title="salom">
           <v-list>
         <v-avatar class="text-center mr-3" left><v-icon class="text-h3 white--text">mdi-wiper-wash</v-icon></v-avatar>
          <v-list-tile class="text-h5 white--text">Actions</v-list-tile>
        <v-divider></v-divider>
      <v-list-item-group mandatory class="white--text" active-class="border">
        <v-list-item  @click="$router.push('/')"> 
          <v-list-item-icon> 
            <v-icon>mdi-home</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item  @click="$router.push('/signup')"> 
          <v-list-item-icon> 
            <v-icon>mdi-account-plus</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Signup
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item  @click="$router.push('/login')"> 
          <v-list-item-icon> 
            <v-icon>mdi-login</v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

    </v-list-item-group>
    </v-list>
  
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer  height="300"  class="blue mt-4"></v-footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data:()=>({
          drawer:false,
  }),
  components: {
    // HelloWorld
  }

}
</script>
