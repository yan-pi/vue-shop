import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    },
    
    addToBag(state, products){
      state.productsInBag.push(products);
    },

    removeFromBag(state, productId){
      let updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
    }
    
  },
  actions: {
    loadProducts({ commit }){
      axios.get('https://fakestoreapi.com/products/')
      .then(response =>{
        commit('loadProducts', response.data);
      })
    },

    addToBag({ commit }, product){
      commit('addToBag', product);
    },

    RemoveFromBag({commit}, productId){
      commit('removeFromBag', productId);
  }
  },
  modules: {
  }
})
