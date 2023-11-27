<template>
    <div>
        <T_Section :title="'Recommendations'">
            <Swiper
                :slides-per-group="1"
                :slides-per-view="5"
                :space-between="50"
                :modules="swiperModules"
                :pagination="swiperPagination"
            >
                <!-- rescommanditions -->
                <SwiperSlide v-for="result in data.results">
                    <a :href="`/tv/${result.id}`" class="space-y-4">
                        <V_Img :imagePath="`original${result.poster_path}`" class="w-full h-[300px] rounded-2xl object-cover" />

                        <div>
                            <span class="text-xl font-pbsans"> {{ result.name }} </span>
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
;</script>
