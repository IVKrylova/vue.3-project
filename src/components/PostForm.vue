<template>
  <form class="form" @submit.prevent>
    <h4 class="form__title">Создание поста</h4>
    <input
      v-model="post.title"
      class="form__input"
      type="text"
      placeholder="Название"
    >
    <input
      v-model="post.description"
      class="form__input"
      type="text"
      placeholder="Описание"
    >
    <button class="form__button" @click="createPost">Создать пост</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          description: '',
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = new Date();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          description: '',
        };
      }
    }
  }
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    max-width: 500px;
    Width: 100%;
    margin: 15px 25px;
    justify-content: center;
    align-items: center;
  }

  .form__input {
    max-width: 300px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid green;
  }

  .form__button {
    box-sizing: border-box;
    border: none;
    background-color: green;
    color: #fff;
    padding: 10px 5px;
    cursor: pointer;
  }
</style>