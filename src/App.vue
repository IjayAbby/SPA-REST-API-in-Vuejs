<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <DogList />
</template>

<script>
import DogList from './components/DogList.vue'

export default {
  name: 'App',
  components: {
    DogList
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
</style>
