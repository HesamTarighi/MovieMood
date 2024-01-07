<template>
    <div>
        <T_Section :title="'Trailers'" v-if="trailers && trailers != ''">
            <div>
                <div class="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    <div v-for="(trailer, i) in trailers" :key="i">
                        <a href="/" class="space-y-4">
                            <YoutubeVideo :videoKey="trailer.key" class="w-[600px] h-[350px] max-xl:w-[460px] max-xl:h-[300px] max-lg:w-[330px] max-lg:h-[200px] max-md:w-full max-md:h-[250px]" />
                            <div>
                                <span class="text-xl font-pbsans max-lg:text-[17px]"> {{ trailer.name }} </span>
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
