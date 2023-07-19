<template>
  <div class="my-10">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-center mb-4 text-5xl font-semibold">Dog Images</h1>
      <select v-model="selectedBreed" @change="loadByBreed">
        <option value="">Choose a dog breed</option>
        <option v-for="breed in breeds" :key="breed" :value="breed">{{ breed }}</option>
      </select>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
      <div class="images" v-for="(image, index) in images" :key="index">
        <router-link :to="`/image/${encodeURIComponent(image)}`">
          <img v-lazy="{ src: image, loading: loadingImage, error: loadingImage }" :src="image"
            class="md:h-72 w-full object-cover" alt="Dog">
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
import loadingImage from '../assets/loading.jpg'

export default {
  data() {
    return {
      breeds: [],
      selectedBreed: '',
      loadingImage,
      images: []
    };
  },
  async created() {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all")
      this.breeds = Object.keys(response.data.message)
    } catch (e) {
      console.log("There was a problem fetching the breed list.")
    }
    for (let i = 0; i < 100; i++) {
      await this.loadRandomImage()
    }
  },
  methods: {
    async loadByBreed() {
      if (this.selectedBreed) {
        const response = await axios.get(`https://dog.ceo/api/breed/${this.selectedBreed}/images`)
        this.images = response.data.message
      }
    },
    async loadRandomImage() {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random')
      this.images.push(response.data.message)
    }
  },
};
</script>
  