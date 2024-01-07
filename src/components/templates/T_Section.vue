<template>
    <section class="w-full">
        <div class="w-lg mx-auto space-y-6 px-6 max-xl:w-md max-lg:w-sm max-md:w-full">
            <div v-if="title">
                <h2 class="text-3xl font-roboto max-lg:text-2xl max-sm:text-xl"> {{ title }} </h2>
            </div>
            <slot />
        </div>
    </section>
</template>

<script setup>
    import { defineProps } from 'vue'

    defineProps([
        'title'
    ])
</script>
