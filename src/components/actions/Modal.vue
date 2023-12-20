<template>
    <div>
        <input type="checkbox" :id="`my_modal_${name}`" class="modal-toggle" />

        <div class="modal" role="dialog">
            <div class="rounded-2xl p-6 space-y-8 flex flex-col overflow-y-auto" v-bind="$attrs">
                <slot />
            </div>
            <label class="modal-backdrop absolute w-full h-full" :for="`my_modal_${name}`"></label>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineOptions } from 'vue'

    // manage props
    defineProps([
        'name'
    ])

    // manage options
    defineOptions({
        inheritAttrs: false
    })
</script>
