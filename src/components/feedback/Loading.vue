<template>
    <div class="w-full h-full bg-base-100 absolute top-0 left-0">
        <span class="w-[100px] loading loading-spinner absolute center text-primary"></span>
    </div>
</template>

<style scoped>
    .spinner {
        box-shadow: inset 3px 3px 1px #ff6b00;
        animation: spinner .7s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
