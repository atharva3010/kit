<template>
<v-container>
  <v-toolbar app dark color="#191C21" dense>
    <router-link to="/">
      <img src="../assets/KFI4.png" style="height:30px;">
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" style="color:#D8DADE;"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat style="color: #D8DADE; text-transform:capitalize;"><h3 style="font-size: 16px; line-height: 22px; color: #D8DADE;">Lorem</h3></v-btn>
      <v-btn flat style="color: #D8DADE; text-transform:capitalize;"><h3 style="font-size: 16px; line-height: 22px; color: #D8DADE;">Ipsum</h3></v-btn>
      <v-btn flat style="color: #D8DADE; text-transform:capitalize;"><h3 style="font-size: 16px; line-height: 22px; color: #D8DADE;">Dolor</h3></v-btn>
      <v-btn flat style="color: #D8DADE; text-transform:capitalize;"><h3 style="font-size: 16px; line-height: 22px; color: #D8DADE;">Sit</h3></v-btn>
      <v-btn flat style="color: #D8DADE; text-transform:capitalize;"><h3 style="font-size: 16px; line-height: 22px; color: #D8DADE;">Amet</h3></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer dark style="box-shadow: 0px 1px 0px #121416; position:fixed; background:#191C21;" class="hidden-md-and-up" temporary v-model="drawer">
    <v-layout text-xs-left column wrap class="mt-5">
      <v-flex xs12>
        <v-btn flat block style="color: #D8DADE; text-transform:capitalize" class="mt-2"><h3>Lorem</h3></v-btn>
      </v-flex>
      <v-flex>
        <v-btn flat block style="color: #D8DADE; text-transform:capitalize" class="mt-2"><h3>Ipsum</h3></v-btn>
      </v-flex>
      <v-flex>
        <v-btn flat block style="color: #D8DADE; text-transform:capitalize" class="mt-2"><h3>Dolor</h3></v-btn>
      </v-flex>
      <v-flex>
        <v-btn flat block style="color: #D8DADE; text-transform:capitalize" class="mt-2"><h3>Sir</h3></v-btn>
      </v-flex>
      <v-flex>
        <v-btn flat block style="color: #D8DADE; text-transform:capitalize" class="mt-2"><h3>Amet</h3></v-btn>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style>
/* button:active { 
  background-color: #ffdb3a;
  transition: background 1s ease-out;
  } */
</style>
