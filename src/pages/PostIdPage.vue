<template>
  <h1>Пост с id {{ $route.params.id }}</h1>
  <h2 v-if="this.currentPost.title">
    {{ this.currentPost.title }}
  </h2>
  <p v-if="this.currentPost.body">
    {{ this.currentPost.body }}
  </p>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        currentPost: state => state.currentPost.currentPost,
      }),
    },
    methods: {
      ...mapActions({
        findCurrentPost: 'currentPost/findCurrentPost',
      }),
    },
    mounted() {
      this.findCurrentPost({ posts: this.posts, idParams: this.$route.params.id });
    },
  }
</script>

<style>

</style>