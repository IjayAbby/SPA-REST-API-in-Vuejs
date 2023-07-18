import { createStore } from 'vuex'

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
        const images = await DogService.getDogImages()
        commit('setDogImages', images)
      } catch (error) {
        console.error('Error fetching dog images:', error)
      }
      commit('setLoading', false)
    },
    async fetchDogDetails({ commit }, breed) {
      commit('setLoading', true)
      try {
        const details = await DogService.getDogDetails(breed)
        commit('setDogDetails', details)
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
