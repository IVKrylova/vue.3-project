<template>
  <li class="post">
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.description }}</p>
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
    align-items: center;
    max-width: 350px;
    width: 100%;
  }
</style>