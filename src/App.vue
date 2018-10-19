<template>
  <div id="app">
    <topbar></topbar>
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Myfooter from './components/Myfooter.vue';


export default {
  components: {
    Topbar: Topbar,
    Myfooter: Myfooter,
  },
}
</script>


<style>
@import url('../node_modules/bootstrap/dist/css/bootstrap.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.carousel-item {
  height: 70vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.portfolio-item {
  margin-bottom: 30px;
}
</style>
