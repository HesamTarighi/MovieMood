<template>
    <div>
        <T_Section :title="'Cast'">
            <div class="w-full grid grid-cols-5 gap-14">
                <!-- trailers -->
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[300px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> 1 </span>
                    </div>
                </a>
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[300px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> 2 </span>
                    </div>
                </a>
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[300px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> 3 </span>
                    </div>
                </a>
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[300px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> 4 </span>
                    </div>
                </a>
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[300px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> 5 </span>
                    </div>
                </a>
            </div>
        </T_Section>
    </div>
</template>

<script setup>
    import T_Section from '@/components/templates/T_Section.vue'
</script>
