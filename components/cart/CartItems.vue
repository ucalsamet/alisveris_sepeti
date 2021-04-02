<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
      <th class="text-center">Ürün Adı</th>
      <th class="text-center">Adet</th>
      <th class="text-center">Fiyat</th>
      <th class="text-center">Tutar</th>
      <th class="text-center">Sil</th>
    </thead>
    <tbody>
     <CartItem v-for="item in cart" :key="item.id" :item="item"/>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: false
    }
  }
};
</script>
