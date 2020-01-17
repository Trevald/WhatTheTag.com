<template>
  <div class="questions">
      <ul v-if="questions" class="mb-10 flex flex-col justify-center items-stretch">
          <li v-for="(question, index) in questions" :key="index" class="flex-1 flex mb-5">
              <router-link :to="question.path" append class="text-left flex-1 bg-teal-900 hover:bg-teal-700 text-yellow-300 text-base sm:text-2xl  py-4 px-8 rounded">{{question.title}}</router-link>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  props: {
    questions: Array
  },

  methods: {

      getPath(path) {
          return `${this.$route.path}/${path}`;
      },

      setQuestion(question) {
          this.$emit("set-question", question)
      }
  }
}
</script>

