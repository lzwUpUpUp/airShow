<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  background-image: url('./assets/img/backgroundPic.png');
  background-size: 100% 100%;
}
</style>
