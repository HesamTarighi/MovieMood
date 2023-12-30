<template>
    <div class="drawer z-50">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <li v-for="item in items"> <a :href="item.link"> {{ item.label }} </a> </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'

    // manage props
    defineProps([
        'items'
    ])
</script>
