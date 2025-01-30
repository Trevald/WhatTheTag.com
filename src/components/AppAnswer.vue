<template>
    <div class="answer text-center bg-teal-900 text-yellow-300 text-2xl py-10 px-8 rounded">
        <p>
            <span v-for="(answer, index) in answers" :key="index" class="text-yellow-400">
                &#x3C;<a :href="getLinkForTag(answer)" class="text-yellow-400 underline" target="wtt-tag">{{
                    answer
                }}</a
                >&#x3E;
                <span v-if="index + 1 < answers.length" class="text-yellow-200 px-3">or</span>
            </span>
        </p>
        <p v-if="comment" class="mt-4 text-sm font-mono text-gray-300">
            {{ comment }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        answers: {
            type: Array,
            required: true
        },
        comment: {
            type: String,
            default: undefined
        }
    },

    methods: {
        getLinkForTag(tag) {
            let url = `https://developer.mozilla.org/en-US/docs/Web/HTML/Element`

            const tagName = tag.match(/[A-za-z0-9]*/)
            url += `/${tagName}`

            const hasTypeAttribute = tag.includes("type")

            if (hasTypeAttribute) {
                const typeAttributeValue = tag.match(/type="([A-Za-z0-9 _]*)"/)[1]

                url += `/${typeAttributeValue}`
            }

            return url
        }
    }
}
</script>
