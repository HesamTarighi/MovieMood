<template>
    <div>
        <T_Section :title="'Trailers'">
            <div>
                <!-- trailers -->
                <!-- <swiper
                :slides-per-view="2"
                :slides-per-group="1"
                :loop="true"
                :space-between="10"
                :modules="swiperModules"
                :pagination="swiperPagination"
                >
                    <swiper-slide v-for="(trailer, i) in trailers" :key="i">
                        <a href="/" class="space-y-4">
                            <YoutubeVideo :size="{ width: '630px', height: '320px' }" :videoKey="trailer.key" class="h-[350px]" />
                            <div>
                                <span class="text-xl font-pbsans"> {{ trailer.name }} </span>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper> -->
                <div class="grid grid-cols-2">
                    <div v-for="(trailer, i) in trailers" :key="i">
                        <a href="/" class="space-y-4">
                            <YoutubeVideo :size="{ width: '630px', height: '320px' }" :videoKey="trailer.key" class="h-[350px]" />
                            <div>
                                <span class="text-xl font-pbsans"> {{ trailer.name }} </span>
                            </div>
                        </a>
                    </div>
                </div>
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
    import { defineProps, computed } from 'vue'
    // modules
    import { Pagination } from 'swiper/modules'
    // styles
    import 'swiper/css';
    import 'swiper/css/pagination';

    // manage props
    const props = defineProps([
        'data'
    ])

    // data
    const swiperModules = [ Pagination ]
    const swiperPagination = {
        clickable: true,
    }

    // computed
    const trailers = computed(() => {
        return props.data.results.filter(result => result.type == 'Trailer')
    })
;</script>
