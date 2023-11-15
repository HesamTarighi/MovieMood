<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-24">
                <!-- hero section -->
                <Hero />
                <!-- Tv list ** popular ** -->
                <MTList :title="'Popular'" :data="popularMovieData" :type="'tv'" />
                <!-- Plans -->
                <Plans :title="'Tariff plans'" />
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
    import MTList from '@/components/sections/index/MTList.vue'
    import Plans from '@/components/sections/index/Plans.vue'
    import Questions from '@/components/sections/index/Questions.vue'
    import Subscription from '@/components/sections/index/Subscription.vue'
    // composabels
    import { ref, onMounted } from 'vue'
    import api from '@/composabels/api.js'

    const tv = api.tv()
    const popularMovieData = ref([])

    onMounted(async () => {
        tv.getPopular()
            .then(response => popularMovieData.value = response.data)
    })
</script>
