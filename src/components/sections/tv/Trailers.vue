<template>
    <div>
        <T_Section :title="'Trailers'">
            <div v-if="data && data != ''">
                <!-- trailers -->
                <swiper
                :slides-per-view="2"
                :slides-per-group="2"
                :loop="true"
                :space-between="10"
                :modules="swiperModules"
                :pagination="swiperPagination"
                >
                    <swiper-slide v-for="(result, i) in data.results" :key="i">
                        <a href="/" class="space-y-4">
                            <YoutubeVideo :videoKey="result.key" class="h-[350px]" />
                            <div>
                                <span class="text-xl font-pbsans"> {{ result.name }} </span>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </T_Section>
    </div>
</template>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import YoutubeVideo from '@/components/data-display/YoutubeVideo.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    // composabels
    import { defineProps } from 'vue'
    // modules
    import { Pagination } from 'swiper/modules'
    // styles
    import 'swiper/css';
    import 'swiper/css/pagination';

    // manage props
    defineProps([
        'data'
    ])

    // data
    const swiperModules = [ Pagination ]
    const swiperPagination = {
        clickable: true,
    }
</script>
