<template>
  <ul class="postList">
    <post
      v-for="post in posts"
      :post="post"
    />
  </ul>
</template>

<script>
  import Post from './Post';

  export default {
    components: {
      Post,
    },
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style>
  .postList {
    padding: 0;
    margin: 20px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
  }
</style>