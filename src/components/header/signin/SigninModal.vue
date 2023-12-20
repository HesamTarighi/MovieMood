<template>
    <Modal :name="'signin'" class="w-[800px]">
        <!-- form -->
        <div class="mx-auto grid grid-cols-2 bg-base-100 rounded-lg shadow overflow-hidden">
            <div class="h-full relative">
                <img class="w-full h-full object-cover object-center" :src="dynamicImage('images/form-banner.jpg')"/>
            </div>
            <div class="w-full p-8">
                <form method="post" action="#" onSubmit="return false">
                    <h1 class=" text-2xl font-bold">Sign in to your account</h1>
                    <div>
                        <span class="opacity-70 text-sm"> Don't have an account? </span>
                        <a href="/" class="text-sm font-semibold text-primary"> Sign up </a>
                    </div>
                    <div class="mb-4 mt-6">
                        <label class="block opacity-70 text-sm font-semibold mb-2" htmlFor="email"> Email </label>
                        <input class="input w-full bg-secondary" id="email" type="text" placeholder="Your email address"/>
                    </div>
                    <div class="mb-6 mt-6">
                        <label class="block opacity-70 text-sm font-semibold mb-2" htmlFor="password"> Password </label>
                        <input class="input w-full bg-secondary" id="password" type="password" placeholder="Your password"/>
                        <a class="inline-block align-baseline text-sm" href="/forgot"> Forgot Password? </a>
                    </div>
                    <div class="flex w-full mt-8">
                        <button class="btn btn-primary"> Sign in </button>
                    </div>
                </form>
            </div>
        </div>
    </Modal>
</template>

<script setup>
    // components
    import Modal from '@/components/actions/Modal.vue'
    import SearchResult from '@/components/header/search/SearchResult.vue'
    // composabels
    import { ref, defineProps, defineEmits, defineOptions } from 'vue'
    import dynamicImage from '@/composabels/dynamic_image.js'

    // manage props
    const props = defineProps([
        'data'
    ])
    
    // manage emits
    const emit = defineEmits([
        'onSearch'
    ])

    // data
    const query = ref('')
    const isEmpty = ref(true)

    // functions
    function onSearch (e) {
        query.value = e.target.value
        if (query.value != '') isEmpty.value = false
        else isEmpty.value = true

        emit('onSearch', query.value)

        setInterval(() => {
            if (!props.data.results || props.data.results == '') isEmpty.value = true
        }, 8000)
    }
;</script>
