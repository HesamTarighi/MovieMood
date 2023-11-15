<template>
    <div>
        <T_Section>
            <div class="w-full rounded-2xl overflow-hidden relative">
                <V_Img :imagePath="`original${data.poster_path}`" class="w-full h-[600px] object-cover" />
                <div class="w-[45%] h-full bg-black/50 px-16 absolute top-0 right-0 flex flex-col justify-center gap-10">
                    <!-- title <name> -->
                    <h2 class="text-5xl uppercase font-roboto"> {{ data.name }} </h2>
                    <div class="space-y-4">
                        <!-- name -->
                        <span class="text-2xl font-opensans"> {{ data.original_name }} </span>
                        <!-- sort information -->
                        <ul class="flex gap-4 text-[17px] font-pbsans">
                            <li> {{ lastAirYear }} </li>
                            <li> {{ rating.rating }} </li>
                            <li> {{ data.number_of_seasons }} Sessons </li>
                            <li> TV Series </li>
                        </ul>
                        <!-- description -->
                        <p class="font-pbsans">
                            {{ data.overview }}
                        </p>
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
        if (props.data.last_air_date) {
            const year = props.data.last_air_date.split('-')[0]
    
            return year
        }
    })
    const rating = computed(() => {
        if (props.data.content_rating && props.data.origin_country) {
            const content = props.data.content_rating.results.find(item => item.iso_3166_1 == props.data.origin_country[0].toUpperCase())
    
            return content
        }
    })
</script>
