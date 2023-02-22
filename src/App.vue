<template>
  <header></header>
  <main class="page">
    <h1 class="h1">Блог</h1>
    <form class="form" @submit.prevent>
      <h4 class="form__title">Создание поста</h4>
      <input
        @input="title = $event.target.value"
        v-bind:value="title"
        class="form__input"
        type="text"
        placeholder="Название"
      >
      <input
        @input="description = $event.target.value"
        v-bind:value="description"
        class="form__input"
        type="text"
        placeholder="Описание"
      >
      <button class="form__button" @click="createPost">Создать пост</button>
    </form>
    <ul class="postList">
      <li class="post" v-for="post in posts">
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__description">{{ post.description }}</p>
      </li>
    </ul>
  </main>
  <footer></footer>
</template>

<script>
    export default {
      data() {
        return {
          posts: [
            { id: 1, title: 'JavaScript', description: 'JavaScript - это язык, который позволяет вам применять сложные вещи на web странице — каждый раз, когда на web странице происходит что-то большее, чем просто её статичное отображение' },
            { id: 2, title: 'React.js', description: 'React.js - это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов' },
            { id: 3, title: 'Vue.js', description: 'Vue.js — это прогрессивный фреймворк для разработки пользовательских интерфейсов и одностраничных веб-приложений на языке JavaScript' },
          ],
          title: '',
          description: '',
        }
      },
      methods: {
        createPost() {
          const newPost = {
            id: new Date(),
            title: this.title,
            description: this.description,
          };
          this.posts.push(newPost);
          this.title = '';
          this.description = '';
        }
      },
    }
</script>

<style>
  .page {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .h1 {
    text-align: center;
    margin: 20px;
    padding: 0;
  }

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