<template>
  <div id="app">
    <button @click="$router.push({name: 'qrcode'})" class="scan-button">
      <img src="../assets/qr-code.png"/>
    </button>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.scan-button {
  position: absolute;
  border: none;
  outline: none;
  background: none;
  border-radius: 2px;
  right: 0px;
}
.scan-button:hover {
  cursor: pointer;
}
.scan-button img {
  width: 50px;
}
</style>