<template>
    <footer>
        <div class="w-lg mx-auto border-t border-white/10 py-[30px] px-6 footer flex gap-x-24 max-xl:w-md max-lg:w-sm max-md:w-full max-lg:flex-col-reverse">
            <aside class="space-y-2">
                <a href="/">
                    <img :src="dynamicImage('logo/moviemood.png')" class="w-[200px] max-lg:w-[150px]" />
                </a>
                <a href="/" class="font-nunito text-lg max-lg:text-md"> info@moviemood.com </a>
                <div class="flex gap-2">
                    <a href="/"> <img :src="dynamicImage('icons/facebook.png')" class="w-[30px]" /> </a>
                    <a href="/"> <img :src="dynamicImage('icons/telegram.png')" class="w-[30px]" /> </a>
                    <a href="/"> <img :src="dynamicImage('icons/twitter.png')" class="w-[30px]" /> </a>
                    <a href="/"> <img :src="dynamicImage('icons/instagram.png')" class="w-[30px]" /> </a>
                </div>
            </aside>
            <div class="w-full grid grid-cols-4 justify-between gap-12 max-sm:grid-cols-2">
                <nav v-for="(item, i) in items" :key="i" class="flex flex-col">
                    <header class="footer-title font-pbsans font-normal normal-case text-[17px] opacity-80"> {{ item.head }} </header> 
                    <a :href="link.href" class="link link-hover font-pbsans text-[16px] my-1 max-sm:text-sm" v-for="(link, j) in item.links" :key="j"> {{ link.label }} </a>
                </nav>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import dynamicImage from '@/composabels/dynamic_image.js'

    const items = [
        {
            head: 'FAQ',
            links: [
                { label: 'Investor relation', href: '/' },
                { label: 'Privacy', href: '/' },
                { label: 'Speed test', href: '/' }
            ]
        },
        {
            head: 'Help center',
            links: [
                { label: 'Jobs', href: '/' },
                { label: 'Cookies preferences', href: '/' },
                { label: 'Legal notices', href: '/' }
            ]
        },
        {
            head: 'Account',
            links: [
                { label: 'Ways to watch', href: '/' },
                { label: 'Corporate information', href: '/' },
                { label: 'Only on MovieMood', href: '/' }
            ]
        },
        {
            head: 'Media center',
            links: [
                { label: 'Terms of us', href: '/' },
                { label: 'Contact us', href: '/' },
                { label: 'Subscription', href: '/' }
            ]
        },
    ]
</script>
