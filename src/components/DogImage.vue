<script lang="ts" setup>
const props=defineProps<{
    image:string,
}>()
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';
//import {Transformation} from '@cloudinary/url-gen';

import {sepia, cartoonify, grayscale} from "@cloudinary/url-gen/actions/effect";

//import FilterButtons from "./FilterButtons.vue"
import { ref } from 'vue';

const cld = new Cloudinary({
    cloud: {
        cloudName: "ijayabby",
    },
})
const public_id=props.image.slice(61,props.image.length)
const myImg = cld.image(public_id);
// Apply the transformation.

const gray=ref(false)
const cartoon=ref(false)
const sep=ref(false)
const origin=ref(true)

const sepia_show=()=>{
    myImg.effect(sepia()).format('png')
    sep.value=true
    gray.value=false
    cartoon.value=false
    origin.value=false
}
const grayscale_show=()=>{
    myImg.effect(grayscale()).format('png')
    gray.value=true
    cartoon.value=false
    sep.value=false
    origin.value=false
}
const cartoonify_show=()=>{
    myImg.effect(cartoonify()).format('png')
    cartoon.value=true
    sep.value=false
    gray.value=false
    origin.value=false
}
const origin_show=()=>{
    myImg.effect(cartoonify()).format('png')
    origin.value=true
    cartoon.value=false
    sep.value=false
    gray.value=false
}

</script>

<template>
    <div class="flex flex-col h-[100vh] justify-center items-center">
        <div class="flex">
            <AdvancedImage :cldImg="myImg" class="max-w-[500px] max-h-[500px]" v-if="gray"/>
            <AdvancedImage :cldImg="myImg" class="max-w-[500px] max-h-[500px]" v-if="cartoon"/>
            <AdvancedImage :cldImg="myImg" class="max-w-[500px] max-h-[500px]" v-if="sep"/>
            <img :src="image" :alt="image" class="max-w-[500px] max-h-[500px]" v-if="origin">
            <!-- <FilterButtons/> -->
            <div class="ml-6 flex flex-col">
                <p class="text-xl mb-4">Apply filters</p>
                <button class="w-[100px] h-[40px] flex justify-center items-center rounded-[10px] bg-black text-white" @click="cartoonify_show">Cartoonify</button>
                <button class="w-[100px] my-4 h-[40px] flex justify-center items-center rounded-[10px] bg-black text-white" @click="grayscale_show">Grayscale</button>
                <button class="w-[100px] h-[40px] flex justify-center items-center rounded-[10px] bg-black text-white" @click="sepia_show">Sepia</button>
                <button class="w-[100px] my-4 h-[40px] flex justify-center items-center rounded-[10px] bg-black text-white" @click="origin_show">Reset</button>
            </div>
        </div>
        <!-- Add your code to display more details about the dog image here -->
    </div>
</template>
  