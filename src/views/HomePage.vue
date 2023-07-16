<template>
  <div class="home">
    <div class="products">

      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');"></div>
        <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
        <p class="price">R$ 109.95</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg');"></div>
        <h4>Mens Casual Premium Slim Fit T-Shirts </h4>
        <p class="price">R$ 22.30</p>
        <button>Adicionar ao carrinho</button>
      </div>
      <div class="product">
        <div class="product-image" style="background-image: url('https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');"></div>
        <h4>Mens Cotton Jacket</h4>
        <p class="price">R$ 55.99</p>
        <button>Adicionar ao carrinho</button>
      </div>
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

  methods: {
   
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
