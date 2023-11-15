<template>
    <T_Section>
        <div class="w-full flex justify-between">
            <!-- image -->
            <div class="w-[60%]">
                <img :src="dynamicImage('images/subscription.png')" class="w-[70%]" />
            </div>
            <!-- input and description -->
            <div class="w-[40%] flex items-center">
                <div class="space-y-4">
                    <h3 class="text-2xl font-opensans"> Subscription </h3>
                    <p class="font-pbsans"> Ready to watch enter your Email Address to Subscribe. When you Subscribe,There is a Free Trail Period </p>
                    <div class="flex justify-between">
                        <input type="text" placeholder="Enter your Email" class="input w-full max-w-xs bg-secondary" />
                        <button class="btn btn-primary"> Subscribe </button>
                    </div>
                    <span class="block text-[12px] font-pbsans"> By clicking the "Subscribe" button, you agree to the processing of <span class="text-primary"> Personal data </span> </span>
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
