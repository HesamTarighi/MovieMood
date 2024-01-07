<template>
    <ul class="grid grid-cols-3 gap-8 max-sm:grid-cols-2 max-sm:gap-6">
        <li v-for="result in data.results">
            <a :href="`/${result.media_type}/${result.id}`" class="space-y-1">
                <V_Img :image-path="`original/${result.poster_path}`" class="w-[200px] h-[200px] rounded-lg object-cover" />
                <span class="text-[17px]"> {{ limit(result.original_title, 14) || limit(result.name, 14) }} </span>
            </a>
        </li>
    </ul>
</template>

<script setup>
    // components
    import V_Img from '@/components/data-display/ServerImage.vue'
    // composables
    import { defineProps } from 'vue'
    import { limit } from '@/composabels/text.js'

    // manage props
    defineProps([
        'data'
    ])
</script>
