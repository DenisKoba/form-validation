<template>
  <div id="app">
    <reg-form/>
  </div>
</template>

<script>
/* eslint-disable */
import RegForm from './components/RegForm'

export default {
  name: 'App',
  components: {
      RegForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
