<template>
    <div>
        <T_Section :title="'Episodes'">
            <div class="space-y-8">
                <div>
                    <select class="select select-xs w-full max-w-xs focus:outline-none">
                        <option disabled selected>Tiny</option>
                        <option>Tiny Apple</option>
                        <option>Tiny Orange</option>
                        <option>Tiny Tomato</option>
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
                        <SwiperSlide class="w-[450px]" v-for="result in 6" :key="result">
                            <a href="/" class="space-y-4">
                                <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[250px] rounded-2xl object-cover" />
                                <div>
                                    <span class="text-xl font-pbsans"> Gangs of London : Sessons 2 </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat excepturi eveniet consequatur tempore
                                </p>
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
    // modules
    import { Pagination } from 'swiper/modules'
    // Import styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    // composabels
    import { ref, defineProps } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    defineProps([
        'data',
        'type'
    ])

    // data
    const swiper = ref({})
    const swiperModules = [ Pagination ]
    const swiperPagination = {
        clickable: true,
    }

    // use events
    function onSwiper (data) {
        swiper.value = data
    }
;</script>
