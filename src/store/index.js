import { createStore } from 'vuex';
import CurrentPostModule from './CurrentPostModule';
import PostModule from './PostModule';

export default createStore({
  modules: {
    post: PostModule,
    currentPost: CurrentPostModule
  }
});