<template>
  <div class="my-10">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-center mb-4 text-5xl font-semibold">Dog Images</h1>
      <select v-model="selectedBreed" @change="loadByBreed">
        <option value="">Choose a dog breed</option>
        <option v-for="breed in breeds" :key="breed" :value="breed">{{ breed }}
          <h3></h3>
        </option>
      </select>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
      <div class="images bg-red-100" v-for="(image, index) in images" :key="index">
        <router-link :to="`/image/${encodeURIComponent(image)}`">
          <img v-lazy="{ src: image, loading: loadingImage, error: loadingImage }" :src="image"
            class="md:h-72 w-full object-cover center" alt="Dog">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import loadingImage from '../assets/loading.jpg';


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
    for (let i = 0; i < 5; i++) {
      await this.loadRandomImage()
    }
  },
  methods: {
    async loadByBreed() {
      if (this.selectedBreed) {
        const response = await axios.get(`https://dog.ceo/api/breed/${this.selectedBreed}/images`)
        this.images = response.data.message
        console.log(`${this.selectedBreed}`) //use this name for home page
      }
    },
    async loadRandomImage() {
      // Fetch a random image from the external API.
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const imageUrl = response.data.message;

      // Upload the image to your Cloudinary account.
      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/ijayabby/image/upload`,
        {
          file: imageUrl,
          upload_preset: 'my-uploads'
        }
      );
      console.log(uploadResponse)
      // Get the public ID of the uploaded image.
      const publicId = uploadResponse.data.secure_url;
      this.images.push(publicId);
      console.log(this.images)
    }
  },
};
</script>