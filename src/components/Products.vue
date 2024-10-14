<template>
  <Skeleton v-if="productsStore.isLoading" />
  <ul v-else class="products">
    <li class="products__item" v-for="product in productsStore.data">
      <img class="products__image" :src="product.image" :alt="product.title" />
      <div class="products__title">{{ product.title }}</div>
      <p class="products__price">{{ product.regular_price.value }} $</p>

      <button
        class="products__button-add"
        v-if="!cartStore.get(product)"
        @click="cartStore.add(product)"
      >
        add
      </button>
      <button
        class="products__button-remove"
        v-else
        @click="cartStore.remove(product)"
      >
        remove
      </button>
    </li>
  </ul>
</template>
<script setup>
import { watch } from "vue";
import { useCartStore } from "../stores/cart";
import { useRoute } from "vue-router";
import { useProductsStore } from "../stores/products";
import Skeleton from "./Skeleton.vue";

const cartStore = useCartStore();
const productsStore = useProductsStore();

const route = useRoute();

productsStore.getData(route.query.brandId);

watch(
  () => route.query.brandId,
  () => productsStore.getData(route.query.brandId)
);
</script>
<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  justify-items: center;
  padding: 10px;
  column-gap: 30px;
  row-gap: 40px;
}

.products__item {
  display: grid;
  list-style-type: none;
  padding: 10px;
  text-align: center;
  transition: box-shadow 0.5s, transform 0.5s;
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  background-image: url("/images/bezh-for-li.jpg");
  background-position: center;
  background-size: cover;
}

.products__item:hover {
  transform: scale(1);
}

.products__button-add,
.products__button-remove {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #70c05b;
  padding: 10px;
  text-align: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
  margin-top: auto;
}

.products__button-add:hover {
  background-color: #0fe869;
  color: white;
  box-shadow: 5px;
}

.products__button-remove {
  color: #c30000;
  border: 1px solid #c30000;
}

.products__button-remove:hover {
  background-color: #dd593f;
  color: white;
  box-shadow: 5px;
}

.products__image {
  width: 100%;
  border-radius: 8px;
  max-width: 100%;
  object-fit: cover;
}

.products__title,
.products__price {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 33px;
  line-height: 150%;
  color: #414141;
}

.products__price {
  flex-wrap: wrap-reverse;
}

@media (max-width: 600px) {
  .products__item {
    padding: 10px;
    margin-bottom: 15px;
  }

  .products__image {
    width: 80px;
    height: 80px;
  }

  .products__title {
    font-size: 14px;
  }

  .products__price {
    font-size: 14px;
  }
}
</style>
