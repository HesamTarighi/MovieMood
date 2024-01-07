<template>
    <T_Section :title="title">
        <div class="w-full" v-if="data && data != ''">
            <swiper
            :loop="true"
            :modules="swiperModules"
            :pagination="swiperPagination"
            :breakpoints="swiperOptions.breakpoints"
            >
                <swiper-slide v-for="(result, i) in data.results" :key="i"> <Card :data="result" :type="type" /> </swiper-slide>
            </swiper>
        </div>
    </T_Section>
</template>

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
    const swiperOptions = {
        // responsive carousel
        breakpoints: {
            // xs
            370: {
                spaceBetween: 10,
                centeredSlides: true
            },
            // sm
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
                centeredSlides: false
            },
            // md
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
                centeredSlides: false
            },
            // lg
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
                centeredSlides: false
            },
            // xl
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
                centeredSlides: false
            },
            // xxl
            1536: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
                centeredSlides: false
            }
        }
    }
;</script>