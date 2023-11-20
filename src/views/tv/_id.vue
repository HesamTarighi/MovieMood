<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-24">
                <!-- details -->
                <Suspense>
                    <template #default>
                        <MTDetails :data="details" />
                    </template>
                    <template #fallback>
                        <Loading class="absolute x-center" />
                    </template>
                </Suspense>
                <!-- trailers -->
                <Suspense>
                    <template #default>
                        <TvTrailers :data="trailers" />
                    </template>
                    <template #fallback>
                        <Loading class="absolute x-center" />
                    </template>
                </Suspense>
                <!-- episodes -->
                <Suspense>
                    <template #default>
                        <TvEpisodes :details="details" @getSeason="callSeasonApi" :season="season" :id="id" />
                    </template>
                    <template #fallback>
                        <Loading class="absolute x-center" />
                    </template>
                </Suspense>
                <!-- cast -->
                <MTCast />
                <!-- similars -->
                <MTSimilars />
            </main>
        </Layout>
    </div>
</template>

<script setup>
    // components
    import Layout from '@/layouts/default.vue'
    import TvEpisodes from '@/components/sections/tv/Episodes.vue'
    import MTCast from '@/components/sections/mt/Cast.vue'
    import MTSimilars from '@/components/sections/mt/Similars.vue'
    import Loading from '@/components/feedback/loading/Bars.vue'
    // composabels
    import api from '@/composabels/api.js'
    import { isEmptyObject } from '@/composabels/validate_object.js'
    import { useRoute } from 'vue-router'
    import { ref, defineAsyncComponent } from 'vue'
    
    // data
    const route = useRoute()
    const tv = api.tv()
    const id = route.params.id
    // response data
        const details = ref({})
        const trailers = ref({})
        const season = ref([])

    // call api
    const callDetailsApi = tv.getDetails(id).then(response => Object.assign(details.value, response.data))
    const callContentRatingApi = tv.getContentRating(id).then(response => Object.assign(details.value, { content_rating: response.data }))
    const callVideosApi = tv.getVideos(id).then(response => trailers.value = response.data)
    function callSeasonApi (selectedSeason) {
        return tv.getSeason(id, selectedSeason).then(response => season.value = response.data)
    }

    // define async components
    const MTDetails = defineAsyncComponent(() => {
        return Promise.all([callDetailsApi, callContentRatingApi]).then(() => import('@/components/sections/mt/Details.vue'))
    })
    const TvTrailers = defineAsyncComponent(() => {
        return Promise.all([callVideosApi]).then(() => import('@/components/sections/tv/Trailers.vue'))
    })
;</script>
