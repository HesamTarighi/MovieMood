<template>
    <div>
        <T_Section>
            <div
            class="w-full h-[600px] bg-no-repeat bg-cover rounded-2xl overflow-hidden relative after:w-full after:h-full after:bg-black/70 after:filter after:backdrop-blur-sm after:absolute after:top-0 after:left-0 max-lg:h-[500px] max-sm:h-[400px]"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${data.backdrop_path}');`"
            >
                <div class="w-full h-full flex justify-between absolute top-0 left-0">
                    <div class="w-[40%] h-full z-10 flex justify-center items-center max-lg:px-6 max-md:hidden">
                        <V_Img :imagePath="`original${data.poster_path}`" class="w-[300px] h-[450px] object-cover rounded-2xl max-lg:h-[350px]" />
                    </div>
                    <div class="w-[60%] h-full bg-black/50 px-16 flex flex-col justify-center gap-10 z-10 max-lg:gap-4 max-lg:px-12 max-md:w-full max-md:px-8 max-md:gap-8">
                        <!-- title <name> -->
                        <h2 class="text-5xl uppercase font-roboto max-lg:text-3xl max-sm:text-2xl"> {{ data.name }} </h2>
                        <div class="space-y-4">
                            <!-- name -->
                            <span class="text-2xl font-opensans max-sm:text-xl"> {{ data.original_name }} </span>
                            <!-- sort information -->
                            <ul class="flex gap-4 text-[17px] font-pbsans max-sm:text-sm">
                                <li> {{ lastAirYear }} </li>
                                <li> {{ rating }} </li>
                                <li> {{ data.number_of_seasons }} Sessons </li>
                                <li> TV Series </li>
                            </ul>
                            <!-- description -->
                            <p class="font-pbsans max-lg:text-sm max-lg:opacity-70">
                                {{ data.overview }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </T_Section>
    </div>
</template>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import V_Img from '@/components/data-display/ServerImage.vue'
    // composabels
    import { defineProps, computed } from 'vue'

    // manage props
    const props = defineProps([
        'data'
    ])

    // computed and data
    const lastAirYear = computed(() => {
        const year = props.data.last_air_date.split('-')[0]

        return year
    })
    const rating = computed(() => {
        try {
            const content = props.data.content_ratings.results.find(item => item.iso_3166_1 == props.data.origin_country[0].toUpperCase())

            return content.rating || 0
        } catch (e) {
            return 0
        }
    })
;</script>
