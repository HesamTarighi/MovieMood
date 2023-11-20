<template>
    <iframe v-bind="size" :src="`https://www.youtube.com/embed/${videoKey}?si=NBXjfeQwIj4Yujz6`" title="YouTube video player`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</template>

<script setup>
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'videoKey',
        'size'
    ])
</script>
