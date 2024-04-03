<template>
  <div id="app">
    <!-- Render the router view -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
*{
  font-weight: 300;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
