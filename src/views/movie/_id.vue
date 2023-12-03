<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-24">
                <!-- details -->
                <Suspense>
                    <template #default>
                        <MovieDetails :data="details" />
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
                        <MTTrailers :data="trailers" />
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

    // define async components
    const MovieDetails = defineAsyncComponent(() => {
        return movie.getDetails(id).then(response => {
            details.value = response.data
            return import('@/components/sections/movie/Details.vue')
        })
    })
    const MTTrailers = defineAsyncComponent(() => {
        return movie.getVideos(id).then(response => {
            trailers.value = response.data
            return import('@/components/sections/mt/Trailers.vue')
        })
    })
    const MTCast = defineAsyncComponent(() => {
        return movie.getCredits(id).then(response => {
            credits.value = response.data
            return import('@/components/sections/mt/Cast.vue')
        })
    })
    const MTRecommendations = defineAsyncComponent(() => {
        return movie.getRecommendations(id).then(response => {
            recommendations.value = response.data
            return import('@/components/sections/mt/Recommendations.vue')
        })
    })
;</script>
