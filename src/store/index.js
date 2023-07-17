import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: []
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    }
  },
  actions: {
    loadProducts({ commit }){
      axios.get('https://fakestoreapi.com/products/')
      .then(response =>{
        commit('loadProducts', response.data);
      })
    }
  },
  modules: {
  }
})
