<template>
    <div>
        <T_Section :title="'Trailers'">
            <div class="w-full grid grid-cols-2 gap-14">
                <!-- trailers -->
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[350px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> Gangs of London : Sessons 1 </span>
                    </div>
                </a>
                <a href="/" class="space-y-4">
                    <img src="@/assets/images/peakyblinders.jpg" class="w-full h-[350px] rounded-2xl object-cover" />
                    <div>
                        <span class="text-xl font-pbsans"> Gangs of London : Sessons 2 </span>
                    </div>
                </a>
            </div>
        </T_Section>
    </div>
</template>

<script setup>
    import T_Section from '@/components/templates/T_Section.vue'
</script>
