<template>
    <div>
        <T_Section :title="'Recommendations'">
            <Swiper
                :breakpoints="swiperOptions.breakpoints"
                :modules="swiperModules"
                :pagination="swiperPagination"
            >
                <!-- rescommanditions -->
                <SwiperSlide v-for="result in data.results">
                    <a :href="`/${result.media_type}/${result.id}`" class="space-y-4">
                        <V_Img :imagePath="`original${result.poster_path}`" class="w-full h-[300px] rounded-2xl object-cover" />

                        <div>
                            <span class="text-xl font-pbsans max-lg:text-[17px]"> {{ result.name || result.title }} </span>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </T_Section>
    </div>
</template>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import V_Img from '@/components/data-display/ServerImage.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    // modules
    import { Pagination } from 'swiper/modules'
    // Import styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    // composabels
    import { defineProps, computed } from 'vue'
    
    // manage props
    const props = defineProps([
        'data'
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
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 20
            },
            // sm
            640: {
                slidesPerGroup: 1,
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false
            },
            // md
            768: {
                slidesPerGroup: 1,
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false
            },
            // lg
            1024: {
                slidesPerGroup: 1,
                slidesPerView: 4,
                spaceBetween: 50,
                centeredSlides: false
            },
            // xl
            1280: {
                slidesPerGroup: 1,
                slidesPerView: 5,
                spaceBetween: 50,
                centeredSlides: false
            },
            // xxl
            1536: {
                slidesPerGroup: 1,
                slidesPerView: 5,
                spaceBetween: 50,
                centeredSlides: false
            }
        }
    }
;</script>
