<template>
    <div>
        <a :href="`/${type}/${data.id}`">
            <div class="py-2">
                <V_Img :image-path="`original/${data.poster_path}`" class="w-[400px] h-[400px] rounded-lg object-cover max-sm:h-[300px]" />
            </div>
            <span class="font-pbsans"> {{ data.name || data.original_title }} </span>
        </a>
    </div>
</template>

<script setup>
    // components
    import V_Img from './ServerImage.vue'
    // composabels
    import { defineProps } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    defineProps([
        'data',
        'type'
    ])
</script>
