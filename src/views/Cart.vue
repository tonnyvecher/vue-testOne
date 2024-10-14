<template>
  <div class="cart-container">
    <h3 class="cart-logo">Cart 🛒</h3>
    <ul class="cart-table">
      <li class="cart-table__item" v-for="product in cartStore.cart">
        <img
          class="cart-table__image"
          :src="product.image"
          :alt="product.title"
        />
        <div class="cart-table__title">{{ product.title }}</div>
        <p class="cart-table__price">{{ product.regular_price.value }} $</p>

        <button
          class="cart-table__button-add"
          v-if="!cartStore.get(product)"
          @click="cartStore.add(product)"
        >
          add
        </button>
        <button
          class="cart-table__button-remove"
          v-else
          @click="cartStore.remove(product)"
        >
          remove
        </button>
      </li>
    </ul>
    <div class="cart-table__summary">
      <p class="cart-table__summary-subtotal">
        Subtotal: {{ cartStore.cartTotal.toFixed(2) }} $
      </p>
      <button class="cart-table__summary-checkout-button">Checkout</button>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>
<style scoped>
.cart-logo {
  font-size: 24px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-right: 7px;
}

.cart-container {
  max-width: 800x;
  margin: auto 20px;
  padding: 20px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cart-table__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #000000;
}

.cart-table__image {
  width: 80px;
  height: 70px;
  margin-right: 20px;
}

.cart-table__title {
  font-weight: bold;
}

.cart-table__price {
  margin-right: 20px;
  font-weight: bold;
  font-size: 16px;
}

.cart-table__button-remove {
  display: block;
  font-weight: 400;
  font-size: 15px;
  color: #c30000;
  border: 1px solid #c30000;
  padding: 5px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
}

.cart-table__button-remove:hover {
  background-color: #dd593f;
  color: white;
  box-shadow: 5px;
}

.cart-table__summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.cart-table__summary-subtotal {
  font-size: 18px;
  font-weight: bold;
}

.cart-table__summary-checkout-button {
  padding: 10px 20px;
  background-color: #e0ffc0;
  color: #000000;
  border: 1px solid rgb(26, 92, 20);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
}

.cart-table__summary-checkout-button:hover {
  background-color: #36d83e;
  color: white;
  box-shadow: 5px;
}

@media (max-width: 600px) {
  .cart-table__item {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-table__image {
    width: 60px;
    height: 60px;
  }

  .cart-table__price,
  .cart-table__title {
    margin-top: 10px;
    font-size: 14px;
  }

  .cart-table__summary-subtotal {
    font-size: 16px;
  }
}
</style>
