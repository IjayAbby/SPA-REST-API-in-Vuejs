import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api';

export default {
    async getBreeds() {
        try {
            const response = await axios.get(`${BASE_URL}/breeds/list/all`);
            console.log(response)
            return response.data.message;
        } catch (error) {
            console.error('Error fetching dog breeds:', error);
            throw error;
        }
    },

    async getRandomImageByBreed(breed) {
        try {
            const response = await axios.get(`${BASE_URL}/breed/${breed}/images/random`);
            console.log(response)
            return response.data.message;
        } catch (error) {
            console.error('Error fetching random dog image by breed:', error);
            throw error;
        }
    },

    async getImagesByBreed(breed) {
        try {
            const response = await axios.get(`${BASE_URL}/breed/${breed}/images`);
            return response.data.message;
        } catch (error) {
            console.error('Error fetching dog images by breed:', error);
            throw error;
        }
    }
};

