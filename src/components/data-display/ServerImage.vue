<template>
    <img :src="`https://image.tmdb.org/t/p/${imagePath}`" />
</template>

<script setup>
    // composabels
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'imagePath'
    ])
</script>
