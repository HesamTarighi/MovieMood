<template>
    <section class="w-full">
        <div class="w-lg mx-auto space-y-6">
            <div v-if="title">
                <h2 class="text-3xl font-roboto"> {{ title }} </h2>
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
