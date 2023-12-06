<template>
    <div>
        <input type="checkbox" id="my_modal_7" class="modal-toggle" />

        <div class="modal" role="dialog">
            <div class="modal-box space-y-8 custom-scrollbar">
                <h3 class="text-lg font-opensans"> Find movie and TV series </h3>
                <input type="text" class="input w-full bg-secondary" placeholder="Search" @input="onSearch($event)" />
                <!-- result -->
                <SearchResult :data="data" v-if="!isEmpty && data.results && data.results != ''" />
                <!-- Loading -->
                <div class="w-full flex justify-center" v-if="!isEmpty && query != '' && (!data.results || data.results == '')">
                    <span class="loading loading-ring loading-lg"></span>
                </div>
                <!-- empty -->
                <div class="flex justify-center" v-if="isEmpty">
                    <img :src="dynamicImage('images/empty.png')" class="w-[350px]" />
                </div>
            </div>
            <label class="modal-backdrop" for="my_modal_7">Close</label>
        </div>
    </div>
</template>

<script setup>
    // components
    import SearchResult from '@/components/header/SearchResult.vue'
    // composabels
    import { ref, defineProps, defineEmits } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    const props = defineProps([
        'data'
    ])
    
    // manage emits
    const emit = defineEmits([
        'onSearch'
    ])

    // data
    const query = ref('')
    const isEmpty = ref(true)

    // functions
    function onSearch (e) {
        isEmpty.value = false
        query.value = e.target.value

        emit('onSearch', query.value)

        setInterval(() => {
            if (!props.data.results || props.data.results == '') isEmpty.value = true
        }, 8000)
    }
;</script>
