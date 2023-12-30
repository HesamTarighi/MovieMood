<template>
    <header class="py-[30px]">
        <nav class="w-lg navbar grid grid-cols-4 justify-between mx-auto max-xl:w-md max-xl:flex max-lg:w-sm max-md:w-full max-md:px-6">
            <!-- hamburger menu and logo -->
            <div class="space-x-4">
                <!-- Hamburger menu -->
                <div class="md:hidden">
                    <label for="my-drawer" class="drawer-button cursor-pointer"> <img :src="dynamicImage('icons/hamburger-menu.png')" class="w-[25px]" /> </label>
                </div>
                <!-- Logo -->
                <div class="w-[200px] max-xl:w-[150px]">
                    <a href="/" class="link no-underline"> <img :src="dynamicImage('logo/moviemood.png')" class="w-full" /> </a>
                </div>
            </div>
            <!-- Links -->
            <div class="w-auto max-md:hidden">
                <ul class="flex gap-8">
                    <li v-for="(item, i) in items" :key="i">
                        <a :href="item.link" class="link link-hover text-lg max-lg:text-[15px]"> {{ item.label }} </a>
                    </li>
                </ul>
            </div>
            <!-- signin and search -->
            <div class="w-auto flex justify-end col-span-2 max-xl:col-span-1">
                <div class="flex items-center gap-4">
                    <label for="my_modal_search" class="btn btn-secondary max-xl:btn-sm md:max-lg:hidden max-sm:hidden"> Find Movie <img :src="dynamicImage('icons/search.png')" alt="search icon" class="w-[18px]" /> </label>
                    <label for="my_modal_search" class="cursor-pointer lg:hidden sm:max-md:hidden"> <img :src="dynamicImage('icons/search.png')" alt="search icon" class="w-[20px]" /> </label>
                    <label for="my_modal_signin" class="btn btn-primary max-xl:btn-sm"> Sign In </label>
                </div>

            </div>
            <!-- Teleport -->
            <Teleport to="#app">
                <SearchModal @onSearch="search" :data="searchResult" />
                <SigninModal @onSearch="search" />
                <Drawer :items="items" />
            </Teleport>
        </nav>
    </header>
</template>

<script setup>
    // components
    import Drawer from '@/components/actions/Drawer.vue'
    import SearchModal from '@/components/header/search/SearchModal.vue'
    import SigninModal from '@/components/header/signin/SigninModal.vue'
    // composabels
    import { ref } from 'vue'
    import api from '@/composabels/api'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const multi = api.multi()
    const items = [
        { label: 'Main', link: '/main' },
        { label: 'Movies', link: '/movies' },
        { label: 'Series', link: '/series' },
        { label: 'Cartoons', link: '/cartoons' },
        { label: 'Collection', link: '/collection' }
    ]
        // response data
        const searchResult = ref({})

    // functions
    function search (query) {
        multi.search(query)
            .then(data => searchResult.value = data.data)
    }
</script>
