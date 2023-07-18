<template>
  <div class="home">
    <div class="products">

      <div 
      v-for="(product, index) in this.products" :key="index"
      class="product">

        <div class="product-image" :style="{backgroundImage: 'url(' + product.image + ')'}"></div>
        <h4>{{product.title}}</h4>
        <p class="price">R$ {{ product.price.toFixed(2) }}</p>
        <button 
        v-if="!isInBag(product)"
        @click="addToBag(product)">Adicionar ao carrinho</button>
        <button 
        v-else
        @click="RemoveFromBag(product)"
        class="remove">Remover</button>
      </div>
      {{ productsInBag.length }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      
    }
  },

  computed: {
   products (){
    return this.$store.state.products;
   },

   productsInBag(){
    return this.$store.state.productsInBag;
   }
  },

  methods:{
    addToBag(product){
      product.quantity = 1
      console.log(product);
      this.$store.dispatch('addToBag', product);
    },
    isInBag(product){
      return this.productsInBag.find(item => item.id == product.id)
    },
    RemoveFromBag(){
      return this.productsInBag.pop()
  }
  }
}
</script>

<style lang="scss">

  .home {

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

  }


</style>
