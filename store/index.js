import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      cart: [],
      totalPrice: 0.0
    },
    mutations: {
      setProducts(state, payload) {
        state.products = payload;
      },
      setCart(state, payload) {
        state.cart = payload;
      },
      setTotalPrice(state, payload) {
        state.totalPrice = payload;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.$axios.get("/").then(response => {
          vuexContext.commit("setProducts", response.data.products);
          vuexContext.commit("setCart", response.data.cart.items);
          vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
        });
      },
      addToCart(vuexContext, payload) {
        this.$axios
          .post("/add-to-cart", { product: payload })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items);
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
          });
      },
      removeProduct(vuexContext, payload) {
        this.$axios
          .post("/remove-product", { product: payload })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items);
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
          });
      },
      changeCount(vuexContext, payload) {
        this.$axios
          .post("/change-count", { product: payload })
          .then(response => {
            vuexContext.commit("setCart", response.data.cart.items);
            vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
          });
      }
    },
    getters: {
      getProducts(state) {
        return state.products;
      },
      getCart(state) {
        return state.cart;
      },
      getTotalPrice(state) {
        return state.totalPrice;
      }
    }
  });
};

export default createStore;
