<template>
  <div id="app">
    <h1>Redirection 1</h1>
    <button @click="$router.push({name: 'home'})" class="home-button">
      <img src="../assets/home.png"/>
    </button>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.home-button {
  position: absolute;
  border: none;
  outline: none;
  background: none;
  border-radius: 2px;
  right: 10px;
}
.home-button:hover {
  cursor: pointer;
}
.home-button img {
  width: 50px;
}
</style>