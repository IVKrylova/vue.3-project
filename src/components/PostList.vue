<template>
  <ul class="post-list" v-show="posts.length > 0">
    <transition-group name="post-list-animation">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </ul>
  <p v-show="posts.length === 0">
    Список постов пуст
  </p>
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
  .post-list {
    padding: 0;
    margin: 20px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }

  .post-list-animation-item {
    display: inline-block;
    margin-right: 10px;
  }

  .post-list-animation-enter-active,
  .post-list-animation-leave-active {
    transition: all .4s ease;
  }

  .post-list-animation-enter-from,
  .post-list-animation-leave-to {
    opacity: 0;
    transform: translateX(130px);
  }

  .post-list-animation-move {
    transition: transform .4s ease;
  }
</style>