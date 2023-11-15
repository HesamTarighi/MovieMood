<template>
    <div data-theme="mytheme">
        <Layout>
            <main class="space-y-24">
                <MTDetails />
            </main>
        </Layout>
    </div>
</template>

<script setup>
    // components
    import Layout from '@/layouts/default.vue'
    import MTDetails from '@/components/sections/mt/Details.vue'
    // composabels
    import api from '@/composabels/api.js'
</script>
