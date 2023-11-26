<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-16">
                <!-- hero section -->
                <Hero />
                <!-- Tv list ** popular ** -->
                <List :title="'Popular TV'" :data="popularMovieData" :type="'tv'" />

                <!-- Tv list ** new ** -->
                <List :title="'New Movies'" :data="newMovieData" :type="'movie'" />
                <!-- Plans -->
                <!-- <Plans :title="'Tariff plans'" /> -->
                <!-- questions -->
                <Questions :title="'Frequently asked questions'" />
                <!-- subscription -->
                <Subscription />
            </main>
        </Layout>
    </div>
</template>

<script setup>
    // components
    import Layout from '@/layouts/default.vue'
    import Hero from '@/components/sections/index/Hero.vue'
    import List from '@/components/sections/index/List.vue'
    import Plans from '@/components/sections/index/Plans.vue'
    import Questions from '@/components/sections/index/Questions.vue'
    import Subscription from '@/components/sections/index/Subscription.vue'
    // composabels
    import { ref, onMounted } from 'vue'
    import api from '@/composabels/api.js'

    // data
    const tv = api.tv()
    const movie = api.movie()
        // response data
        const popularMovieData = ref([])
        const newMovieData = ref([])

    // call api
    tv.getPopular().then(response => popularMovieData.value = response.data)
    movie.getNew().then(response => newMovieData.value = response.data)
</script>
