<template>
    <T_Section>
        <div class="w-full flex justify-between shadow-xl">
            <div v-for="(plan, i) in plans" :key="i">
                <PlanCard :data="plan" />
            </div>
        </div>
    </T_Section>
</template>

<script setup>
    // components
    import T_Section from '@/components/templates/T_Section.vue'
    import PlanCard from '@/components/data-display/PlanCard.vue'

    // data
    const plans = [
        {
            title: 'Base',
            price: 7.99,
            expirationDay: 7,
            description: 'For warm and cozy views with the family',
            options: [
                { available: true, label: 'Unlimited movies, TV series and more' },
                { available: true, label: 'Viewing on 1 screen' },
                { available: false, label: 'HD quality' }
            ],
            special: false
        },
        {
            title: 'Comfort',
            price: 9.99,
            expirationDay: 15,
            description: 'For fun views with family and friends',
            options: [
                { available: true, label: 'Unlimited movies, TV series and more' },
                { available: true, label: 'Viewing on 2 screen' },
                { available: true, label: 'HD quality' }
            ],
            special: false
        },
        {
            title: 'Comfort+',
            price: 12.99,
            expirationDay: 21,
            description: 'For true connoisseurs of cinema',
            options: [
                { available: true, label: 'Unlimited movies, TV series and more' },
                { available: true, label: 'Viewing on 3 screen' },
                { available: true, label: 'Ultra quality' }
            ],
            special: true
        },
        {
            title: 'Vip',
            price: 15.99,
            expirationDay: 30,
            description: 'For a home cinema feel',
            options: [
                { available: true, label: 'Unlimited movies, TV series and more' },
                { available: true, label: 'Viewing on 5 screen' },
                { available: true, label: 'Ultra+ quality' }
            ],
            special: false
        },
    ] 
</script>
