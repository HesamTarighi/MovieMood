<template>
    <img :src="src" />
</template>

<script setup>
    // composabels
    import { defineProps, computed } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image'

    // manage props
    const props = defineProps([
        'imagePath'
    ])

    // computed
    const src = computed(() => {
        if (props.imagePath && !props.imagePath.includes('null')) return `https://image.tmdb.org/t/p/${props.imagePath}`
        else return dynamicImage('images/no-image.jpg')
    })
</script>
