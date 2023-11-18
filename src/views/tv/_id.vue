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
                    </template>
                </Suspense>
                <!-- trailers -->
                <TvTrailers />
                <!-- episodes -->
                <Suspense>
                    <template #default>
                        <TvEpisodes :details="details" @getSeason="callSeason" :season="season" :id="id" />
                    </template>
                    <template #fallback>
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
    import TvTrailers from '@/components/sections/tv/Trailers.vue'
    import TvEpisodes from '@/components/sections/tv/Episodes.vue'
    import MTCast from '@/components/sections/mt/Cast.vue'
    import MTSimilars from '@/components/sections/mt/Similars.vue'
    // composabels
    import api from '@/composabels/api.js'
    import { useRoute } from 'vue-router'
    import { ref, defineAsyncComponent } from 'vue'
    
    // data
    const route = useRoute()
    const tv = api.tv()
    const id = route.params.id
    // response data
        const details = ref({})
        const season = ref([])

    // call api
    const callDetails = tv.getDetails(id).then(response => Object.assign(details.value, response.data))
    const callContentRating = tv.getContentRating(id).then(response => Object.assign(details.value, { content_rating: response.data }))
    function callSeason (selectedSeason) {
        return tv.getSeason(id, selectedSeason).then(response => season.value = response.data)
    }

    // define async components
    const MTDetails = defineAsyncComponent(() => {
        return Promise.all([callDetails, callContentRating]).then(() => import('@/components/sections/mt/Details.vue'))
    })
</script>
