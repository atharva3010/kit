<template>
  <v-app style="background: linear-gradient(115.51deg, #121416 0%, #2B354C 100%);" id="app">
    <Toolbar></Toolbar>
    
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import Footer from '@/components/Footer';

export default {
  name: "app",
  components: {
    Toolbar,
    Footer
  }
}
</script>

<style>
  #app{
    font-family: 'Lato', sans-serif;
    
  }
  html {
    scroll-behavior: smooth;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
