<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-24">
                {{ details }}
                <!-- details -->
                <MTDetails :data="details" />
                <!-- trailers -->
                <TvTrailers />
                <!-- episodes -->
                <TvEpisodes />
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
    import MTDetails from '@/components/sections/mt/Details.vue'
    import TvTrailers from '@/components/sections/tv/Trailers.vue'
    import TvEpisodes from '@/components/sections/tv/Episodes.vue'
    import MTCast from '@/components/sections/mt/Cast.vue'
    import MTSimilars from '@/components/sections/mt/Similars.vue'
    // composabels
    import api from '@/composabels/api.js'
    import { isEmptyObject } from '@/composabels/validate_object.js'
    import { useRoute } from 'vue-router'
    import { ref } from 'vue'

    // data
    const route = useRoute()
    const tv = api.tv()
    const details = ref({})
    const id = route.params.id

    // use api
    tv.getDetails(id).then(response => Object.assign(details.value, response.data))
    tv.getContentRating(id).then(async response => Object.assign(details.value, { content_rating: response.data }))
</script>
