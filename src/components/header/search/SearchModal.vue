<template>
    <Modal :name="'search'" :class="'bg-base-100 w-[600px] h-[650px]'">
        <div class="space-y-8">
            <h3 class="text-lg font-opensans"> Find movie and TV series </h3>
            <input type="text" class="input w-full bg-secondary" placeholder="Search" @input="onSearch($event)" />
        </div>

        <div class="h-full flex flex-col">
            <!-- result -->
            <SearchResult :data="data" v-if="!isEmpty && data.results && data.results != ''"/>
            <!-- Loading -->
            <div class="w-full h-full flex justify-center items-center" v-if="!isEmpty && query != '' && (!data.results || data.results == '')">
                <span class="loading loading-ring loading-lg"></span>
            </div>
            <!-- empty -->
            <div class="h-full flex justify-center items-center" v-if="isEmpty">
                <img :src="dynamicImage('images/empty.png')" class="w-[350px]" />
            </div>
        </div>
    </Modal>
</template>

<script setup>
    // components
    import Modal from '@/components/actions/Modal.vue'
    import SearchResult from '@/components/header/search/SearchResult.vue'
    // composabels
    import { ref, defineProps, defineEmits, defineOptions } from 'vue'
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
        query.value = e.target.value
        if (query.value != '') isEmpty.value = false
        else isEmpty.value = true

        emit('onSearch', query.value)

        setInterval(() => {
            if (!props.data.results || props.data.results == '') isEmpty.value = true
        }, 8000)
    }
;</script>
