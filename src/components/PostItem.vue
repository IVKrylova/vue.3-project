<template>
  <li class="post">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.body }}</p>
    <my-button @click="$emit('remove', post)">Удалить</my-button>
  </li>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style>
  .post {
    border: solid 2px green;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>