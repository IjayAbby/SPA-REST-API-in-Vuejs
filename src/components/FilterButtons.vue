<template>
    <div class="container my-4">
        <div class="row">
            <div class="col-12">
                <h3 class="mb-3">Image Filters</h3>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary" @click="applyFilter('cartoonify')">
                        Cartoonify
                    </button>
                    <button type="button" class="btn btn-outline-primary" @click="applyFilter('grayscale')">
                        Grayscale
                    </button>
                    <button type="button" class="btn btn-outline-primary" @click="applyFilter('sepia')">
                        Sepia
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        applyFilter(filterType) {
            // Emit an event with the selected filter type
            this.$emit('apply-filter', filterType);
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

  