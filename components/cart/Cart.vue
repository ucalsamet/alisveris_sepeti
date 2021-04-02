<template>
  <div class="cart-container card shadow">
    <h3 class="text-center ">Sepet</h3>

    <Alert v-if="cart.lenght == 0 || !cart"/>
    <CartItems :cart="cart"/>
    <CartFooter />
  </div>
</template>

<script>
export default {
  props:{
    cart:{
      type:Array,
      required:false
    }
  }
}
</script>