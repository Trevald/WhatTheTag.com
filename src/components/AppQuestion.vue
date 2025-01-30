<template>
    <main>
        <header class="flex items-end justify-center pt-10">
            <div class="text-center">
                <h1 class="text-yellow-300 text-white text-2xl sm:text-6xl text-center mb-2">
                    <router-link to="/">What the tag ?!</router-link>
                </h1>
                <p class="text-base sm:text-2xl text-gray-500 mb-10">{{ pageTitle }}</p>
            </div>
        </header>
        <div class="flex justify-center items-start">
            <div class="questions">
                <ul v-if="hasQuestions" class="mb-10 flex flex-col justify-center items-stretch">
                    <li v-for="alternative in question.questions" :key="alternative.id" class="flex-1 flex mb-5">
                        <router-link
                            :to="{ name: 'question', params: { id: alternative.id } }"
                            class="text-left flex-1 bg-teal-900 hover:bg-teal-700 text-yellow-300 text-base sm:text-2xl py-4 px-8 rounded"
                            >{{ alternative.title }}</router-link
                        >
                    </li>
                </ul>
                <AppAnswer v-if="hasAnswers" :answers="answers" :comment="comment" />
            </div>
        </div>
    </main>
</template>

<script>
import QUESTIONS from "./../data/questions.json"
import AppAnswer from "./AppAnswer.vue"

export default {
    components: {
        AppAnswer
    },

    computed: {
        hasQuestions() {
            return this.question?.questions !== undefined
        },

        hasAnswers() {
            return this.question.answers !== undefined
        },

        params() {
            return this.$route.params
        },

        pageTitle() {
            if (this.$route.name === "home") {
                return "Quickly find out which HTML tag to use when"
            }

            return this.question.title
        },

        comment() {
            return this.question.comment
        },

        question() {
            if (this.$route.name === "home") {
                return { questions: QUESTIONS }
            }

            let question

            for (let i = 0; i < QUESTIONS.length; i++) {
                question = findQuestion(QUESTIONS[i], this.params.id)

                if (question) {
                    break
                }
            }

            return question
        },

        answers() {
            return this.question.answers
        }
    },

    mounted() {}
}

function findQuestion(question, id) {
    if (question.id === id) {
        return question
    }

    if (question.questions === undefined) {
        return undefined
    }

    let childQuestion
    for (let i = 0; i < question.questions.length; i++) {
        childQuestion = findQuestion(question.questions[i], id)

        if (childQuestion) {
            break
        }
    }

    return childQuestion
}
</script>
