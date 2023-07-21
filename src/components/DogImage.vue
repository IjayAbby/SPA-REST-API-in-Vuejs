<template>
    <div>
        <h1>Dog Image</h1>
        <img :src="image" alt="Dog Image">
        <!-- Add your code to display more details about the dog image here -->
    </div>
</template>
  
<script>

export default {
    props: ['image']
}
</script>