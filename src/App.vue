<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo"></div>
      <Burger></Burger>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <a @click="$router.push({name: 'home'})">Home</a>
        </li>
        <li>
          <a @click="$router.push({name: 'qrcode'})">Scan</a>
        </li>
        <li>
          <a @click="$router.push({name: 'stepx'})">Étape X</a>
        </li>
      </ul>
    </Sidebar>
    <simplert></simplert>
    <v-dialog />
    <router-view />
  </div>
</template>

<script>
  import Burger from "./components/burger.vue";
  import Sidebar from "./components/sidebar.vue";

export default {
  name: 'App',
  components: {
    Burger,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.home-img {
  width: 50px;
  border-radius: 2px;
  margin-left: 50px;
}
html {
  height: 100%;
  overflow: hidden;
}
body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}
.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: "Lato";
}
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}
ul.sidebar-panel-nav {
  list-style-type: none;
}
ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
