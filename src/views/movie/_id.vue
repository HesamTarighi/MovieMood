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
                            <span class="loading loading-bars loading-lg"></span>
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
                            <span class="loading loading-bars loading-lg"></span>
                        </div>
                    </template>
                </Suspense>
                <!-- cast -->
                <Suspense>
                    <template #default>
                        <MTCast :data="credits" />
                    </template>
                    <template #fallback>
                        <div class="w-full flex justify-center">
                            <span class="loading loading-bars loading-lg"></span>
                        </div>
                    </template>
                </Suspense>
                <!-- recommendations -->
                <Suspense>
                    <template #default>
                        <MTRecommendations :data="recommendations" />
                    </template>
                    <template #fallback>
                        <div class="w-full flex justify-center">
                            <span class="loading loading-bars loading-lg"></span>
                        </div>
                    </template>
                </Suspense>
            </main>
        </Layout>
    </div>
</template>

<script setup>
    // components
    import Layout from '@/layouts/default.vue'
    // composabels
    import api from '@/composabels/api.js'
    import { useRoute } from 'vue-router'
    import { ref, defineAsyncComponent } from 'vue'
    
    // data
    const route = useRoute()
    const movie = api.movie()
    const id = route.params.id
    // response data
        const details = ref([])
        const trailers = ref({})
        const credits = ref([])
        const recommendations = ref([])

    // call api
    const callDetailsApi = movie.getDetails(id).then(response => details.value = response.data)
    const callVideosApi = movie.getVideos(id).then(response => trailers.value = response.data)
    const callCreditsApi = movie.getCredits(id).then(response => credits.value = response.data)
    const callRecommendationsApi = movie.getRecommendations(id).then(response => recommendations.value = response.data)

    // define async components
    const MTDetails = defineAsyncComponent(() => {
        return Promise.all([ callDetailsApi ]).then(() => import('@/components/sections/mt/Details.vue'))
    })
    const TVTrailers = defineAsyncComponent(() => {
        return Promise.all([ callVideosApi ]).then(() => import('@/components/sections/tv/Trailers.vue'))
    })
    const MTCast = defineAsyncComponent(() => {
        return Promise.all([ callCreditsApi ]).then(() => import('@/components/sections/mt/Cast.vue'))
    })
    const MTRecommendations = defineAsyncComponent(() => {
        return Promise.all([ callRecommendationsApi ]).then(() => import('@/components/sections/mt/Recommendations.vue'))
    })
;</script>
