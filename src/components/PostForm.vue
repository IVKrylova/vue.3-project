<template>
  <form class="form" @submit.prevent>
    <h4 class="form__title">Создание поста</h4>
    <my-input
      v-model="post.title"
      type="text"
      placeholder="Название"
      v-focus
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <my-button @click="createPost">Создать пост</my-button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
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
</style>