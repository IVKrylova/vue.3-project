<template>
  <header></header>
  <main class="page">
    <h1 class="h1">Блог</h1>
    <my-button @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="posts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <p v-else>Идет загрузка...</p>
  </main>
  <footer></footer>
</template>

<script>
  import PostList from './components/PostList';
  import PostForm from './components/PostForm';
  import axios from 'axios';

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      removePost(post) {
        this.posts = this.posts.filter(el => el.id !== post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = res.data;
        } catch(err) {
          console.log(err);
        } finally {
          this.isPostLoading = false;
        }
      },
    },
    mounted() {
      this.fetchPosts();
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