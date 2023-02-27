<template>
  <main class="page">
    <h1 class="h1">Блог</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
      v-focus
    />
    <ul class="button-list">
      <li>
        <my-button @click="$router.push('/')">На главную</my-button>
      </li>
      <li>
        <my-button @click="showDialog">Создать пост</my-button>
      </li>
      <li>
        <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
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
    <div v-intersection="loadMorePosts" class="observer"></div>
  </main>
</template>

<script>
  import PostList from '../components/PostList';
  import PostForm from '../components/PostForm';
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

  export default {
    components: {
      PostList,
      PostForm,
    },
    data() {
      return {
        dialogVisible: false,
      }
    },
    methods: {
      ...mapActions({
        fetchPosts: 'post/fetchPosts',
        loadMorePosts: 'post/loadMorePosts',
      }),
      ...mapMutations({
        setPage: 'post/setPage',
        setSearchQuery: 'post/setSearchQuery',
        setSelectedSort: 'post/setSelectedSort',
      }),
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
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        isPostLoading: state => state.post.isPostLoading,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        totalPages: state => state.post.totalPages,
        page: state => state.post.page,
        limit: state => state.post.limit,
        sortOptions: state => state.post.sortOptions,
      }),
      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        searchSortedPosts: 'post/searchSortedPosts',
      }),
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