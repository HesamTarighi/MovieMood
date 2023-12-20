<template>
    <div data-theme="mytheme">
        <Suspense>
            <Layout>
                <main class="space-y-24">
                    <TVDetails :data="details" />
                    <MTTrailers :data="trailers" />
                    <TVEpisodes :details="details" @getSeason="callSeasonApi" :season="season" :id="id" :dataStatus="episodeDataStatus" @changeDataStatus="changeDataStatus" />
                    <MTCast :data="credits" />
                    <MTRecommendations :data="recommendations" />
                </main>
            </Layout>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<script setup>
    // components
    import Layout from '@/layouts/default.vue'
    import Loading from '@/components/feedback/Loading.vue'
    // composabels
    import api from '@/composabels/api.js'
    import { useRoute } from 'vue-router'
    import { ref, defineAsyncComponent } from 'vue'
    
    // data
    const route = useRoute()
    const tv = api.tv()
    const id = route.params.id
    const episodeDataStatus = ref("LOADING")
    // response data
        const details = ref([])
        const trailers = ref({})
        const season = ref([])
        const credits = ref([])
        const recommendations = ref([])

    // functions
    function changeDataStatus (status) {
        episodeDataStatus.value = status
    }

    // call api
    const callSeasonApi = selectedSeason => (
        tv.getSeason(id, selectedSeason).then(response => {
            season.value = response.data
            changeDataStatus('SUCCESS')
        })
    )

    // define async components
    const TVDetails = defineAsyncComponent(() => {
         return tv.getDetails(id).then(response => {
            details.value = response.data
            return import('@/components/sections/tv/Details.vue')
        })
    })
    const MTTrailers = defineAsyncComponent(() => {
        return tv.getVideos(id).then(response => {
            trailers.value = response.data
            return import('@/components/sections/mt/Trailers.vue')
        })
    })
    const TVEpisodes = defineAsyncComponent(() => {
        return Promise.all([ callSeasonApi(1) ]).then(() => import('@/components/sections/tv/Episodes.vue'))
    })
    const MTCast = defineAsyncComponent(() => {
        return tv.getCredits(id).then(response => {
            credits.value = response.data
            return import('@/components/sections/mt/Cast.vue')
        })
    })
    const MTRecommendations = defineAsyncComponent(() => {
        return tv.getRecommendations(id).then(response => {
            recommendations.value = response.data
            return import('@/components/sections/mt/Recommendations.vue')
        })
    })
;</script>
