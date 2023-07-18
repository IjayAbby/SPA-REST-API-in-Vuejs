<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
      </div>
      <div class="col-12">
        <FilterButtons @apply-filter="applyFilter" />
      </div>
      <div class="col-12">
        <img v-if="transformedImage" :src="transformedImage" class="img-fluid" alt="Transformed Dog">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterButtons from './FilterButtons.vue'

export default {
  components: {
    FilterButtons
  },
  computed: {
    ...mapGetters(['getDogDetails', 'isLoading'])
  },
  data() {
    return {
      transformedImage: null
    }
  },
  methods: {
    applyFilter(filterType) {
      // Apply the selected filter to the dog image and update the transformedImage data
      // using Cloudinary or a similar service
    }
  },
  // created() {
  //   const breed = this.$route.params.breed
  //   this.$store.dispatch('fetchDogDetails', breed)
  // }
}
</script>

<style>
.container {
  margin-top: 2rem;
}

.col-12:not(:last-child) {
  margin-bottom: 1rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
