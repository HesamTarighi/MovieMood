<template>
    <div>
        <T_Section>
            <div
            class="w-full h-[600px] bg-no-repeat bg-cover rounded-2xl overflow-hidden relative after:w-full after:h-full after:bg-black/70 after:filter after:backdrop-blur-sm after:absolute after:top-0 after:left-0"
            :style="`background-image: url('https://image.tmdb.org/t/p/original${data.backdrop_path}');`"
            >
                <div class="w-full h-full flex justify-between absolute top-0 left-0">
                    <div class="w-[40%] h-full z-10 flex justify-center items-center">
                        <V_Img :imagePath="`original${data.poster_path}`" class="w-[300px] h-[450px] object-cover rounded-2xl" />
                    </div>
                    <div class="w-[60%] h-full bg-black/50 px-16 flex flex-col justify-center gap-8 z-10">
                        <!-- title <name> -->
                        <h2 class="text-5xl uppercase font-roboto"> {{ data.title }} </h2>
                        <div class="space-y-4">
                            <!-- name -->
                            <span class="text-3xl font-opensans"> {{ data.original_title }} </span>
                            <!-- sort information -->
                            <div>
                                <ul class="flex gap-3 text-[17px] font-pbsans">
                                    <li> {{ releaseDate }} </li>
                                    -
                                    <li> {{ rating.certification }} </li>
                                    -
                                    <li> {{ time }} </li>
                                    -
                                    <li> Movie </li>
                                </ul>
                                <ul>
                                    <li class="space-x-2">
                                        <span v-for="(genre, i) in data.genres" :key="i"> {{ genre.name }} <span v-if="i != data.genres.length -1">/ </span> </span>
                                    </li>
                                </ul>
                            </div>
                            <!-- description -->
                            <p class="font-pbsans">
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

    // computed
    const releaseDate = computed(() => {
        const releaseDateArr = props.data.release_date.split('-')
        return `${ releaseDateArr[1] }/${ releaseDateArr[2] }/${ releaseDateArr[0] }`
    })

    const rating = computed(() => {
        try {
            const content = props.data.release_dates.results.find(item => item.iso_3166_1 == props.data.production_countries[0].iso_3166_1.toUpperCase())

            return content.release_dates[0] || 0
        } catch (e) {
            return 0
        }
    })

    const time = computed(() => {
        try {
            const content = props.data.translations.translations.find(item => item.iso_639_1 == props.data.original_language)
            const hour = Math.floor(content.data.runtime / 60)
            const minute = Math.floor(content.data.runtime % 60)
            const time = hour == 0 ? `${minute}m` : `${hour}h ${minute}m`

            return time
        } catch (e) {
            return ''
        }
    })
;</script>
