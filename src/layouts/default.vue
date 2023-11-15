<template>
    <div class="space-y-24">
        <V_Header />
        <slot />
        <V_Footer />
    </div>
</template>

<script setup>
    import V_Header from '@/components/base/V_Header.vue'
    import V_Footer from '@/components/base/V_Footer.vue'
</script>