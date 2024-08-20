
<script setup>
import NavBar from './components/NavBar.vue';
import ContactBar from './components/ContactBar.vue';

  const beforeEnter = (el) => {
    el.style.opacity = 0;
  };

  const enter = (el, done) => {
    el.offsetHeight; // trigger reflow
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = 1;
    done();
  };

  const leave = (el, done) => {
    el.style.transition = 'opacity 0.5s ease';
    el.style.opacity = 0;
    done();
  };
</script>

<template>
  <NavBar></NavBar>
  <transition name="page" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <router-view></router-view> 
  </transition>
  <ContactBar />
    
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e52;
  margin-top: 60px;
  
}
*{
  background-color: #a8d0e6
}
</style>
