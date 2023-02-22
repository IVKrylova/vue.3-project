<template>
  <ul class="postList">
    <li class="post" v-for="post in posts">
      <h2 class="post__title">{{ post.title }}</h2>
      <p class="post__description">{{ post.description }}</p>
    </li>
  </ul>
</template>

<script>
  export default {
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