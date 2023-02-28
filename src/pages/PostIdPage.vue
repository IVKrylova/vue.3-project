<template>
  <main class="post-id">
    <h1 class="h1">Пост с ID {{ $route.params.id }}</h1>
    <h2 v-if="this.currentPost.title" class="post-id__title">
      {{ this.currentPost.title }}
    </h2>
    <p v-if="this.currentPost.body" class="post-id__description">
      {{ this.currentPost.body }}
    </p>
  </main>
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
  .post-id {
    color: #F9CFB6;
  }

  .post-id__title {
    text-align: center;
    font-size: 30px;
  }

  .post-id__description {
    font-size: 24px;
  }
</style>