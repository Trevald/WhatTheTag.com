<template>
  <div id="app">
    <router-view></router-view>
    <footer class="flex items-center text-center">
        <div class="flex flex-1 flex-col justify-between items-center w-full">
            <div class="breadcrumbs">
                <ul class="flex justify-center mr-auto ml-auto text-gray-600">
                    <li v-for="(part, index) in breadcrumbs" :key="index">
                        {{part}}
                    </li>
                </ul>            
            </div>
            <div class="p-10 text-xs font-mono text-gray-500">
                Made possible with 
                <ul class="inline cred">
                    <li><a href="https://www.theleagueofmoveabletype.com/chunk" class="underline hover:text-gray-300">Chunk</a></li>
                    <li><a href="https://www.figma.com/" class="underline hover:text-gray-300">Figma</a></li>
                    <li><a href="https://purgecss.com/" class="underline hover:text-gray-300">PurgeCSS</a></li>
                    <li><a href="https://tailwindcss.com/" class="underline hover:text-gray-300">Tailwind CSS</a></li>
                    <li><a href="https://vuejs.org/" class="underline hover:text-gray-300">Vue.js</a></li>
                    <li><a href="https://cli.vuejs.org/" class="underline hover:text-gray-300">Vue CLI</a></li>
                </ul>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>

export default {
    name: 'app',

    data() {
        return {
            pageTitle: "Quickly find out which HTML tag to use when"
        }
    },

    computed: {
        breadcrumbs() {
            const paths = this.$route.path.split('/');

            return paths.filter(part => part !== "");
        }
    }
}
</script>

<style>


#app {
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-template-rows: 1fr minmax(8rem, 15vh);
    grid-row-gap: 0;
}

main {
    padding: 1rem 0;
}

footer .breadcrumbs li:not(:last-child)::after {
    content: "/";
    padding: 0 1rem;
}

.cred li {
    display: inline;
}

.cred li:not(:last-child)::after {
    content: ", ";
}

</style>
