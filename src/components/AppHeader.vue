<template>
  <header class="app-header">
    <div class="app-header__logo">
      <RouterLink to="/"><img src="/images/logo.png" alt="" /> </RouterLink>
    </div>
    <div class="app-header__cart">
      <RouterLink to="/cart">🛒 {{ store.count }}</RouterLink>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";

const store = useCartStore();
</script>
<style scoped>
.app-header,
.app-header__cart,
.app-header__logo {
  display: flex;
  flex-direction: column;
}

.app-header__logo {
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/images/bezh-for-li.jpg");
  background-position: center;
  background-size: cover;
  margin: 0;
}

.app-header__cart {
  display: inline-flexbox;
  align-items: flex-end;
  width: auto;
  margin: 7px;
  font-size: 2rem;
  padding: 10px 17px;
}

@media (max-width: 600px) {
  .app-header {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .app-header__cart {
    align-items: center;
  }
  .app-header__logo {
    height: 60px;
    font-size: 1.5rem;
  }
}
</style>
