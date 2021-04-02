<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <p class="p-0 m-0 w-100 d-flex align-items-center">
      <span>{{ product.title }}</span>
      <span
        class="price-container badge-warning text-white font-italic rounded p-1 ml-3"
        >{{ product.price }}₺</span
      >
    </p>
    <div class="count-container d-flex flex-row justify-content-end mr-3">
      <button
        @click="changeCount(false)"
        class="btn btn-sm btn-outline-danger rounded-0"
      >
        -
      </button>
      <input
        disabled
        type="text"
        class="form-control form-control-sm w-25  text-center rounded-0 border-left-0 border-right-0"
        v-model="productCount"
      />
      <button
        @click="changeCount(true)"
        class="btn btn-sm btn-outline-success rounded-0"
      >
        +
      </button>
    </div>
    <button @click="addToCart" class="btn btn-sm btn-outline-primary">Sepete Ekle</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productCount: 1
    };
  },
  methods: {
    changeCount(status) {
      if (!status) {
        if (this.productCount > 1) {
          this.productCount--;
        }
      } else {
        this.productCount++;
      }
    },
    addToCart() {
      let pr;
      this.$store.dispatch("addToCart", {
        count: this.productCount,
        ...this.product
      });
    }
  }
};
</script>
