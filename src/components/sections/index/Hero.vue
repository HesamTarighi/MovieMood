<template>
    <T_Section>
        <div class="hero bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse lg:justify-between lg:p-0">
                <img :src="dynamicImage('images/Hero.png')" class="max-w-lg max-xl:w-[400px] max-sm:w-[320px]" />
                <div>
                    <h1 class="text-5xl font-opensans leading-snug max-xl:text-4xl max-sm:text-2xl">
                        your ultimate destination for top-quality TV shows, movies, and more
                    </h1>
                    <p class="py-6 font-pbsans opacity-70 max-sm:text-sm">
                        A Liberary of movies and TV shows you can watch any where
                    </p>
                    <div class="space-x-4">
                        <button class="btn btn-primary max-lg:btn-sm"> Subscribe </button>
                        <button class="btn btn-outline btn-primary max-lg:btn-sm"> Free trial </button>
                    </div>
                </div>
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    // composabels
    import dynamicImage from '@/composabels/dynamic_image.js'
</script>
