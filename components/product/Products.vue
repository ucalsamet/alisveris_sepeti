<template>
  <div class="product-container card shadow mr-5">
    <h3 class="text-center">Ürün Listesi</h3>
    <div class="list-group">
      <Product v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    products:{
      type:Array,
      required:false
    }
  }
};
</script>
