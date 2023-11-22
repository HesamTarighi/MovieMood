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
                        <div class="w-full flex justify-center">
                            <Loading />
                        </div>
                    </template>
                </Suspense>
                <!-- trailers -->
                <Suspense>
                    <template #default>
                        <TVTrailers :data="trailers" />
                    </template>
                    <template #fallback>
                        <div class="w-full flex justify-center">
                            <Loading />
                        </div>
                    </template>
                </Suspense>
                <!-- episodes -->
                <Suspense>
                    <template #default>
                        <TVEpisodes :details="details" @getSeason="callSeasonApi" :season="season" :id="id" :dataStatus="episodeDataStatus" @changeDataStatus="changeDataStatus" />
                    </template>
                    <template #fallback>
                        <div class="w-full flex justify-center">
                            <span class="loading loading-bars loading-lg"></span>
                        </div>
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
    const episodeDataStatus = ref("LOADING")
    // response data
        const details = ref({})
        const trailers = ref({})
        const season = ref([])

    // functions
    function changeDataStatus (status) {
        console.log(status)
        episodeDataStatus.value = status
    }

    // call api
    const callDetailsApi = tv.getDetails(id).then(response => Object.assign(details.value, response.data))
    const callContentRatingApi = tv.getContentRating(id).then(response => Object.assign(details.value, { content_rating: response.data }))
    const callVideosApi = tv.getVideos(id).then(response => trailers.value = response.data)
    function callSeasonApi (selectedSeason) {
        return tv.getSeason(id, selectedSeason).then(response => {
            season.value = response.data
            changeDataStatus('SUCCESS')
        })
    }

    // define async components
    const MTDetails = defineAsyncComponent(() => {
        return Promise.all([callDetailsApi, callContentRatingApi]).then(() => import('@/components/sections/mt/Details.vue'))
    })
    const TVTrailers = defineAsyncComponent(() => {
        return Promise.all([callVideosApi]).then(() => import('@/components/sections/tv/Trailers.vue'))
    })
    const TVEpisodes = defineAsyncComponent(() => {
        return Promise.all([callSeasonApi(0)]).then(() => import('@/components/sections/tv/Episodes.vue'))
    })
;</script>
