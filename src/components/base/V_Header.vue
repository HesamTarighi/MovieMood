<template>
    <header class="py-[30px]">
        <nav class="w-lg navbar grid grid-cols-4 justify-between mx-auto">
            <!-- Logo -->
            <div>
                <a href="/" class="link no-underline text-3xl"> Movie Mood </a>
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
                <input type="text" class="input w-[300px] bg-secondary" placeholder="Search" />
                <button class="btn btn-primary"> Sign In </button>
            </div>
        </nav>
    </header>
</template>

<script setup>
    const links = [
        { label: 'Main', href: '/main' },
        { label: 'Movies', href: '/movies' },
        { label: 'Series', href: '/series' },
        { label: 'Cartoons', href: '/cartoons' },
        { label: 'Collection', href: '/collection' }
    ]
</script>
