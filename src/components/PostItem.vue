<template>
  <li class="post">
    <p>ID {{ post.id }}</p>
    <h2 class="post__title">{{ post.title }}</h2>
    <p class="post__description">{{ post.body }}</p>
    <ul class="post__button-list">
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
    border: solid 2px #92A9C9;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    color: #F9CFB6;
  }

  .post__title {
    color: #F9CFB6;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 24px;
  }

  .post__description {
    padding: 0;
    margin: 0;
    font-size: 20px;
  }

  .post__button-list {
    display: flex;
    column-gap: 20px;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>