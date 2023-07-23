import { createStore } from 'vuex'
import DogList from '../components/DogList.vue'

const store = createStore({
  state: {
    dogImages: [],
    dogDetails: {},
    loading: false
  },
  mutations: {
    setDogImages(state, images) {
      state.dogImages = images
    },
    // setDogDetails(state, details) {
    //   state.dogDetails = details
    // },
    setLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    async fetchDogImages({ commit }) {
      commit('setLoading', true)
      try {
        const images = await DogList.loadRandomImage()
        commit('setDogImages', images)
      } catch (error) {
        console.error('Error fetching dog images:', error)
      }
      commit('setLoading', false)
    },
    async fetchDogBreed({ commit }, breed) {
      commit('setLoading', true)
      try {
        const selectedBreed = await DogList.loadByBreed(breed)
        commit('setDogDetails', selectedBreed)
      } catch (error) {
        console.error('Error fetching dog details:', error)
      }
      commit('setLoading', false)
    }
  },
  getters: {
    getDogImages(state) {
      return state.dogImages
    },
    getDogDetails(state) {
      return state.dogDetails
    },
    isLoading(state) {
      return state.loading
    }
  }
})

export default store
