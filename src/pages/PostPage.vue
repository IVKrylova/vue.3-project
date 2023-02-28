<template>
  <main class="content">
    <h1 class="h1">Список постов</h1>
    <ul class="action-list">
      <li>
        <my-button @click="showDialog">Создать пост</my-button>
      </li>
      <li>
        <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск..."
          v-focus
          class="input_shearch"
        />
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
  .h1 {
    text-align: center;
    margin: 20px;
    padding: 0;
  }

  .action-list {
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>