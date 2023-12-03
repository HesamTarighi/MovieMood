<template>
    <div>
        <input type="checkbox" id="my_modal_7" class="modal-toggle" />

        <div class="modal" role="dialog">
            <div class="modal-box space-y-8 custom-scrollbar">
                <h3 class="text-lg font-opensans"> Find movie and TV series </h3>
                <input type="text" class="input w-full bg-secondary" placeholder="Search" @input="$emit('onSearch', $event)" />
                <ul class="grid grid-cols-3 gap-8">
                    <li v-for="result in data.results">
                        <a :href="`/${result.media_type}/${result.id}`" class="space-y-1">
                            <V_Img :image-path="`original/${result.poster_path}`" class="w-[200px] h-[200px] rounded-lg object-cover" />
                            <span class="text-[17px]"> {{ limit(result.original_title, 14) || limit(result.name, 14) }} </span>
                        </a>
                    </li>
                </ul>
            </div>
            <label class="modal-backdrop" for="my_modal_7">Close</label>
        </div>
    </div>
</template>

<script setup>
    // components
    import V_Img from '@/components/data-display/ServerImage.vue'
    // composabels
    import { limit } from '@/composabels/text.js'
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'data'
    ])
;</script>
