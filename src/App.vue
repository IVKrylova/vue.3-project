<template>
  <header></header>
  <main class="page">
    <h1 class="h1">Блог</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <ul class="button-list">
      <li>
        <my-button @click="showDialog">Создать пост</my-button>
      </li>
      <li>
        <my-select
          v-model="selectedSort"
          :options="sortOptions"
        />
      </li>
    </ul>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
      :posts="searchSortedPosts"
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
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
          { value: 'title', name: 'По названию'},
          { value: 'body', name: 'По описанию'},
        ],
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
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
      },
      searchSortedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      },
    }
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

  .button-list {
    margin: 20px;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
</style>