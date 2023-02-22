<template>
  <header></header>
  <main class="page">
    <h1 class="h1">Блог</h1>
    <post-form
      @create="createPost"
    />
    <post-list
      :posts="posts"
    />
  </main>
  <footer></footer>
</template>

<script>
  import PostList from './components/PostList';
  import PostForm from './components/PostForm';

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [
          { id: 1, title: 'JavaScript', description: 'JavaScript - это язык, который позволяет вам применять сложные вещи на web странице — каждый раз, когда на web странице происходит что-то большее, чем просто её статичное отображение' },
          { id: 2, title: 'React.js', description: 'React.js - это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов' },
          { id: 3, title: 'Vue.js', description: 'Vue.js — это прогрессивный фреймворк для разработки пользовательских интерфейсов и одностраничных веб-приложений на языке JavaScript' },
        ],
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
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
</style>