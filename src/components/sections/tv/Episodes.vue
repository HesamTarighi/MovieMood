<template>
    <div>
        <T_Section :title="'Episodes'">
            <div class="space-y-8">
                <div>
                    <select class="select select-sm w-full max-w-xs focus:outline-none" @change="onSelectSeason">
                        <option v-for="(result, i) in details.seasons" :key="i" :selected="i == 0" :value="i + 1"> Season {{ i + 1 }} </option>
                    </select>
                </div>
                <div class="relative">
                    <Swiper
                    :slides-per-group="1"
                    :slides-per-view="'auto'"
                    :space-between="10"
                    :modules="swiperModules"
                    :pagination="swiperPagination"
                    @swiper="onSwiper"
                    >
                        <SwiperSlide class="w-[450px]" v-for="episode in season.episodes">
                            <a href="/" class="space-y-4">
                                <V_Img :imagePath="`/original/${episode.still_path}`" class="w-full h-[250px] rounded-2xl object-cover" />
                                <div>
                                    <span class="text-xl font-pbsans"> {{ episode.episode_number }}. {{ episode.name }} </span>
                                </div>
                                <p> {{ episode.overview }} </p>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <button
                    @click="swiper.slidePrev()"
                    class="btn btn-primary w-[60px] h-[60px] rounded-full border-0 mx-4 flex justify-center items-center absolute left-0 top-[35%] z-10"
                    v-show="swiper.activeIndex != 0"
                    >
                        <img :src="dynamicImage('icons/chervon-left.png')" class="w-[30px] h-[30px]" />
                    </button>
                    <button
                    @click="swiper.slideNext()"
                    class="btn btn-primary w-[60px] h-[60px] rounded-full border-0 mx-4 flex justify-center items-center absolute right-0 top-[35%] z-10"
                    >
                        <img :src="dynamicImage('icons/chervon-right.png')" class="w-[30px] h-[30px]" />
                    </button>
                </div>
            </div>
        </T_Section>
    </div>
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

<style scoped>
    button {
        padding: 0 !important;
    }
</style>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import V_Img from '@/components/data-display/ServerImage.vue'
    // modules
    import { Pagination } from 'swiper/modules'
    // Import styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    // composabels
    import { ref, defineProps, defineEmits } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    const props = defineProps([
        'details',
        'type',
        'id',
        'season'
    ])
    // manage emits
    const emits = defineEmits([
        'getSeason'
    ])

    // data
    const swiper = ref({})
    const swiperModules = [ Pagination ]
    const swiperPagination = {
        clickable: true,
    }
    const selectedSeason = ref(1)

    // use emit
    emits('getSeason', selectedSeason.value)

    // use events
    function onSwiper (data) {
        swiper.value = data
    }
    function onSelectSeason (e) {
        selectedSeason.value = e.target.value

        emits('getSeason', selectedSeason.value)
    }
;</script>
