<template>
    <header class="py-[30px]">
        <nav class="w-lg navbar grid grid-cols-4 justify-between mx-auto">
            <!-- Logo -->
            <div>
                <a href="/" class="link no-underline text-3xl"> <img :src="dynamicImage('logo/moviemood.png')" class="w-[200px]" /> </a>
            </div>
            <!-- Links -->
            <div>
                <ul class="flex gap-8">
                    <li v-for="(link, i) in links" :key="i">
                        <a :href="link.href" class="link link-hover text-lg"> {{ link.label }} </a>
                    </li>
                </ul>
            </div>
            <!-- signin and search -->
            <div class="w-full flex justify-end gap-8 col-span-2">
                <label for="my_modal_7" class="btn btn-secondary"> Find Movie <img :src="dynamicImage('icons/search.png')" alt="search icon" class="w-[18px]" /> </label>
                <button class="btn btn-primary"> Sign In </button>

                <SearchModal @onSearch="search" :data="searchResult" />
            </div>
        </nav>
    </header>
</template>

<script setup>
    // components
    import SearchModal from '@/components/header/SearchModal.vue'
    // composabels
    import { ref } from 'vue'
    import api from '@/composabels/api'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // data
    const multi = api.multi()
    const links = [
        { label: 'Main', href: '/main' },
        { label: 'Movies', href: '/movies' },
        { label: 'Series', href: '/series' },
        { label: 'Cartoons', href: '/cartoons' },
        { label: 'Collection', href: '/collection' }
    ]
        // response data
        const searchResult = ref({})

    // functions
    function search (e) {
        const query = e.target.value

        multi.search(query)
            .then(data => searchResult.value = data.data)
    }
</script>
