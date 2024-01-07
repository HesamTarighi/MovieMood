<template>
    <T_Section>
        <div class="w-full flex justify-between items-center gap-40 max-xl:gap-20">
            <div class="w-full space-y-4">
                <div class="collapse w-full border-b-2 border-secondary rounded-none" v-for="(question, i) in questions" :key="i">
                    <input type="radio" name="my-accordion-1" checked="checked" /> 
                    <div class="collapse-title text-xl font-nunito">
                        <div>
                            {{ question.title }}
                        </div>
                    </div>
                    <div class="collapse-content"> 
                        <p class="text-pbsans text-sm"> {{ question.content }} </p>
                    </div>
                </div>
            </div>
            <div class="max-lg:hidden">
                <img :src="dynamicImage('images/dark.jpg')" class="w-[1000px] aspect-square rounded-2xl object-cover max-xl:w-[800px]" />
            </div>
        </div>
    </T_Section>
</template>

<style scoped>
    
</style>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    // composabels
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const questions = [
        { title: 'What is PrimeFlicks', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam illum at itaque qui? Accusantium aperiam quis in id eligendi qui dolor porro, magnam ea, ad maxime quaerat? Ab, consequuntur.' },
        { title: 'Where I can watch', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam illum at itaque qui? Accusantium aperiam quis in id eligendi qui dolor porro, magnam ea, ad maxime quaerat? Ab, consequuntur.' },
        { title: 'How do I cancel', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam illum at itaque qui? Accusantium aperiam quis in id eligendi qui dolor porro, magnam ea, ad maxime quaerat? Ab, consequuntur.' },
        { title: 'IS watch me suitable for kids', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque veniam illum at itaque qui? Accusantium aperiam quis in id eligendi qui dolor porro, magnam ea, ad maxime quaerat? Ab, consequuntur.' },
        { title: 'What can i watch on PrimeFlicks', content: 'MovieMood has an extensive library of feature films, ducumentaries, TV shows, anime. watch as much ah yu want, any time you want' },
    ]
</script>
