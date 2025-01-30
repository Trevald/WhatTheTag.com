<template>
    <header class="flex items-end justify-center pt-10">
        <div class="text-center">
            <h1 class="text-yellow-300 text-white text-2xl sm:text-6xl text-center mb-2">
                <router-link to="/">What the tag ?!</router-link>
            </h1>
            <p class="text-base sm:text-2xl text-gray-500 mb-10">{{ title }}</p>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
