<template>
    <div>
        <T_Section :title="'Cast'">
            <Swiper
                :slides-per-group="1"
                :slides-per-view="5"
                :space-between="50"
                :modules="swiperModules"
                :scrollbar="swiperScrollbar"
            >
                <!-- cast -->
                <SwiperSlide v-for="cast in data.cast">
                    <a href="/" class="space-y-4">
                        <V_Img :imagePath="`original${cast.profile_path}`" class="w-full h-[300px] rounded-2xl object-cover" />

                        <div>
                            <span class="text-xl font-pbsans"> {{ cast.name }} </span>
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
    import { Scrollbar } from 'swiper/modules'
    // Import styles
    import 'swiper/css';
    import 'swiper/css/scrollbar';
    // composabels
    import { defineProps } from 'vue'
    
    // manage props
    const props = defineProps([
        'data'
    ])

    // data
    const swiperModules = [ Scrollbar ]
    const swiperScrollbar = {
        draggable: true,
    }
;</script>
