<template>
    <div>
        <T_Section :title="'Episodes'">
            <div class="space-y-8">
                <div>
                    <select class="select select-sm w-full max-w-xs focus:outline-none" @change="onSelectSeason">
                        <option v-for="(result, i) in details.seasons" :key="i" :selected="i == 0" :value="i + 1"> Season {{ i + 1 }} </option>
                    </select>
                </div>
                <div class="relative" v-if="dataStatus == 'SUCCESS'">
                    <Swiper
                    :modules="swiperModules"
                    :scrollbar="swiperScrollbar"
                    :breakpoints="swiperOptions.breakpoints"
                    @swiper="onSwiper"
                    >
                        <SwiperSlide class="w-[450px]" v-for="episode in season.episodes">
                            <a href="/" class="space-y-4">
                                <V_Img :imagePath="`/original/${episode.still_path}`" class="w-full h-[250px] rounded-2xl object-cover" />
                                <div>
                                    <span class="text-xl font-pbsans max-lg:text-[17px]"> {{ episode.episode_number }}. {{ episode.name }} </span>
                                </div>
                                <p class="max-lg:opacity-70"> {{ episode.overview }} </p>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                    <button
                    @click="swiper.slidePrev()"
                    class="btn btn-primary w-[60px] h-[60px] rounded-full border-0 mx-4 flex justify-center items-center absolute left-0 top-[35%] z-10 max-lg:w-[40px] max-lg:h-[40px]"
                    >
                        <img :src="dynamicImage('icons/chervon-left.png')" class="w-[30px] h-[30px] max-lg:w-[20px] max-lg:h-[20px]" />
                    </button>
                    <button
                    @click="swiper.slideNext()"
                    class="btn btn-primary w-[60px] h-[60px] rounded-full border-0 mx-4 flex justify-center items-center absolute right-0 top-[35%] z-10 max-lg:w-[40px] max-lg:h-[40px]"
                    >
                        <img :src="dynamicImage('icons/chervon-right.png')" class="w-[30px] h-[30px] max-lg:w-[20px] max-lg:h-[20px]" />
                    </button>
                </div>
                <div v-else-if="dataStatus == 'LOADING'">
                    <div class="w-full flex justify-center">
                        <span class="loading loading-ring loading-lg"></span>
                    </div>
                </div>
            </div>
        </T_Section>
    </div>
</template>

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
    import { Scrollbar } from 'swiper/modules'
    // Import styles
    import 'swiper/css'
    import 'swiper/css/scrollbar'
    // composabels
    import { ref, defineProps, defineEmits } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'
    
    // manage props
    const props = defineProps([
        'details',
        'type',
        'id',
        'season',
        'dataStatus'
    ])

    // manage emits
    const emits = defineEmits([
        'getSeason'
    ])

    // data
    const swiper = ref({})
    const swiperModules = [ Scrollbar ]
    const swiperScrollbar = {
        draggable: true,
    }
    const selectedSeason = ref(1)
    const swiperOptions = {
        // responsive carousel
        breakpoints: {
            // xs
            370: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10
            },
            // sm
            640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
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
                slidesPerGroup: 1,
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false
            },
            // xl
            1280: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false
            },
            // xxl
            1536: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false
            }
        }
    }

    // use emit
    emits('getSeason', selectedSeason.value)

    // use events
    function onSwiper (data) {
        swiper.value = data
    }
    function onSelectSeason (e) {
        selectedSeason.value = e.target.value

        emits('getSeason', selectedSeason.value)
        emits('changeDataStatus', 'LOADING')
    }
;</script>
