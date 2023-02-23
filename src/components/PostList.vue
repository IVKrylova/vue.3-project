<template>
  <ul class="postList">
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </ul>
</template>

<script>
  import PostItem from './PostItem';

  export default {
    components: {
      PostItem,
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