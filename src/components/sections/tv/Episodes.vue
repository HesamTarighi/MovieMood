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
                    :slides-per-group="1"
                    :slides-per-view="'auto'"
                    :space-between="10"
                    :modules="swiperModules"
                    :scrollbar="swiperScrollbar"
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
