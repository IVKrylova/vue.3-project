import axios from 'axios';

export default {
  state: () => ({
    posts: [],
    isPostLoading: false,
    selectedSort: '',
    searchQuery: '',
    totalPages: 0,
    page: 1,
    limit: 10,
    sortOptions: [
      { value: 'title', name: 'По названию'},
      { value: 'body', name: 'По описанию'},
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
    },
    searchSortedPosts(state, getters) {
      return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostLoading(state, isPostLoading) {
      state.isPostLoading = isPostLoading;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPage(state, page) {
      state.page = page;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setIsPostLoading', true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit('setTotalPages', Math.ceil(res.headers['x-total-count'] / state.limit));
        commit('setPosts', res.data);
      } catch(err) {
        console.log(err);
      } finally {
        commit('setIsPostLoading', false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        state.page += 1;
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit('setTotalPages', Math.ceil(res.headers['x-total-count'] / state.limit));
        commit('setPosts', [...state.posts, ...res.data]);
      } catch(err) {
        console.log(err);
      }
    },
    removePost({ state, commit }, post) {
      commit('setPosts', state.posts.filter(el => el.id !== post.id));
    },
    createNewPost({ state, commit }, post) {
      commit('setPosts', [...state.posts, post]);
    },
  },
  namespaced: true,
}