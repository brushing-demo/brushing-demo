import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import * as getters from './getter';

//定义初始化的state
const defaultSatate = {
  count: 0,
  topics: []
};

//判断当前的开发环境
const inBrowser = typeof window != "undefined";

// if (!inBrowser || process.env.NODE_ENV == "development") {
  //node里肯定use
  Vue.use(Vuex);
// }

//SSR一定要知道你前端那些请求是异步的，后端先把异步的请求执行完
let state = (inBrowser && window.__INITIAL_STATE__) || defaultSatate;

//定义mutations
const mutaitions = {
  INCREMNT: (state) => ++state.count,
  DECREMENT: (state) => --state.count,
  TOPICS_LIST(state, topics) {
    console.log('收到的值为：',topics);
    state.topics = topics;
  }
};

export function createStore() {
  const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutaitions
  });
  return store;
}