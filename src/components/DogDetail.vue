<template>
  <div>
    <h1>Dogs</h1>
    <ul>
      <li v-for="dog in dogs" :key="dog.id">
        <img :src="dog.url" alt="Dog">
        <p>{{ dog.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        dogs: []
      };
    },
    mounted() {
      this.getDogs();
    },
    methods: {
      getDogs() {
        axios.get("https://dog.ceo/api/breeds/list/all")
          .then(response => {
            this.dogs = response.data.message;
            console.log()
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
</script>

<style>
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
      }

      img {
        width: 100px;
      }
</style>