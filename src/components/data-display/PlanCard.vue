<template>
    <div>
        <div class="card w-[300px] bg-secondary shadow-xl" :class="data.special ? 'border-2 border-primary' : ''">
            <div class="card-body px-6 space-y-8">
                <div class="space-y-6">
                    <div class="space-y-2">
                        <div class="space-y-2">
                            <h2 class="card-title text-2xl font-rubik"> {{ data.title }} </h2>
                            <span class="text-3xl font-roboto block"> {{ data.price }} $ </span>
                        </div>
                        <div class="space-y-3">
                            <p class="text-[12px]"> {{ data.description }} </p>
                            <span class="text-primary text-[12px] font-roboto"> {{ data.expirationDay }} days free </span>
                        </div>
                    </div>
                    <ul class="space-y-1">
                        <li v-for="(option, i) in data.options" :key="i" class="flex items-center gap-2">
                            <img :src="option.available ? dynamicImage('icons/radial-check.png') : dynamicImage('icons/radial-close.png')" class="w-[25px] h-[25px]" /> <span class="text-[12px]"> {{ option.label }} </span>
                        </li>
                    </ul>
                </div>
                <div class="card-actions justify-end">
                    <button class="w-full btn btn-primary" :class="!data.special ? 'btn-outline' : ''"> Choose a tariff </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    // composabels
    import { defineProps } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    defineProps([
        'data'
    ])
</script>
