export default {
  state: () => ({
    currentPost: {
      id: 0,
      title: '',
      body: '',
    }
  }),
  mutations: {
    setCurrentPost(state, currentPost) {
      state.currentPost = currentPost;
    },
  },
  actions: {
    findCurrentPost({ commit }, payload) {
      const post = payload.posts.find(el => el.id === Number(payload.idParams));
      commit('setCurrentPost', post);
    }
  },
  namespaced: true,
}