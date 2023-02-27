<template>
  <li class="post">
    <p>{{ post.id }}</p>
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.body }}</p>
    <ul>
      <li>
        <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
      </li>
      <li>
        <my-button @click="$emit('remove', post)">Удалить</my-button>
      </li>
    </ul>
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