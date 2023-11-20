<template>
    <T_Section :title="title">
        <div v-if="data && data != ''">
            <swiper
            :slides-per-view="4"
            :slides-per-group="4"
            :loop="true"
            :space-between="10"
            :modules="swiperModules"
            :pagination="swiperPagination"
            >
                <swiper-slide v-for="(result, i) in data.results" :key="i"> <Card :data="result" :type="type" /> </swiper-slide>
            </swiper>
        </div>
    </T_Section>
</template>

<style>
    .swiper {
        @apply overflow-y-visible;
    }
    .swiper-pagination {
        bottom: -2rem !important;
    }
    .swiper-pagination-bullet {
        @apply bg-white opacity-80 w-3 rounded-[1000px];
    }
    .swiper-pagination-bullet-active {
        @apply bg-primary w-5 rounded-[1000px] opacity-100;
    }
</style>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import Card from '@/components/data-display/DataCard.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    // modules
    import { Pagination } from 'swiper/modules'
    // Import styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    // composabels
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'data',
        'type'
    ])

    // data
    const swiperModules = [ Pagination ]
    const swiperPagination = {
        clickable: true,
    }
;</script>