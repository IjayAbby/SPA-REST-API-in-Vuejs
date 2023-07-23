<template>
    <div>
      <h2>Original Image</h2>
      <AdvancedImage :cldImg="myImage" />
  
      <h2>Filter Previews</h2>
      <div>
        <button @click="applyFilter('sepia')">Sepia</button>
        <button @click="applyFilter('grayscale')">Grayscale</button>
        <button @click="applyFilter('cartoonify')">Cartoonify</button>
      </div>
  
      <div v-for="filter in filters" :key="filter">
        <h3>{{ filter }}</h3>
        <AdvancedImage :cldImg="previewImages[filter]" />
      </div>
    </div>
  </template>
<script>

import DogList from '../components/DogList.vue'
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from "@cloudinary/url-gen";
import { sepia, grayscale, cartoonify } from '@cloudinary/url-gen/actions/effect';


//Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "ijayabby",
  },
});


export default {
  components: {
    AdvancedImage,
    DogList
  },
  data() {
    const cld = new Cloudinary({ cloud: { cloudName: 'ijayabby' } });
    const myImage = cld.image(`${publicId}`);
    return {
      myImage,
      filters: ['sepia', 'grayscale', 'cartoonify'],
      previewImages: {
        sepia: myImage.clone().effect(sepia()),
        grayscale: myImage.clone().effect(grayscale()),
        cartoonify: myImage.clone().effect(cartoonify()),
      },
    };
  },
  methods: {
    applyFilter(filter) {
      this.myImage.effect(window[filter]());
    },
  },
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}

.col-12:not(:last-child) {
    margin-bottom: 1rem;
}
</style>

  