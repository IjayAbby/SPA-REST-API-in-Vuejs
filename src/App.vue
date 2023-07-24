<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <DogList />
</template>

<script>
import DogList from './components/DogList.vue'
//import FilterButtons from './components/FilterButtons.vue';

export default {
  name: 'App',
  components: {
    DogList,
    //FilterButtons
  }
}
</script>

<style>
#app {
margin: 0;
padding: 0;
}
</style>
