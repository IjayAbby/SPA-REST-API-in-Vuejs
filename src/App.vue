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
margin: 0;
padding: 0;
}
</style>
