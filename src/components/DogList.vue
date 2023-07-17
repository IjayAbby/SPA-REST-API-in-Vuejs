<template>
    <div class="my-10">
        <div class="flex flex-col items-center justify-center">
             <h1 class="text-center mb-4 text-5xl font-semibold">Dog Images</h1>
            <input type="text" id="search" placeholder="Search for a dog / breed" class="py-2 border-gray-500 rounded-[8px] placeholder:text-black focus:outline-orange-900 border-[1px] px-4 w-[50vw]"/>
        </div>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
            <div class="" v-for="(image,index) in dogImages" :key="index">
                <router-link to="/dog/1">
                    <img v-lazy="{ src: image, loading: loadingImage, error: loadingImage }" :src="image" class="md:h-72 w-full object-cover" alt="Dog">
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import DogService from '../services/DogService';
import loadingImage from '../assets/loading.jpg'

export default {
    data(){
        return {
            dogImages:[],
            loadingImage
        };
    },
    computed: {
        ...mapGetters(['getDogImages']),
    },
    mounted() {
        this.fetchDogImages();
    },
    methods: {
        async fetchDogImages() {
            try {
                // const breeds = await DogService.getBreeds();
                // const randomBreed = Object.keys(breeds)[0]; // Fetch images for the first breed in the list
                // const randomImage = await DogService.getRandomImageByBreed(randomBreed);
                // const images = await DogService.getImagesByBreed(randomBreed);
                // this.$store.commit('setDogImages', [...images, randomImage]);
                const images = await DogService.getDogImages();
                this.dogImages=images.data.message
                console.log(images.data)
            } catch (error) {
                console.error('Error fetching dog images:', error);
            }
        },
    },
};
</script>