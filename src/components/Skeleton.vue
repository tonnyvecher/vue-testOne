<template>
  <div class="skeleton">
    <div v-for="index in 3" :key="index" class="skeleton__skeleton-item">
      <div class="skeleton__skeleton-img"></div>
      <div class="skeleton__skeleton-title"></div>
    </div>
  </div>
</template>
<script setup>
import { useProductsStore } from "../stores/products";

const productsStore = useProductsStore();
</script>
<style scoped>
.skeleton {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 40px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 16 auto;
}

.skeleton__skeleton-item {
  display: grid;
  flex-direction: column;
  align-items: center;
  background: #fcffd4;
  padding: 10px;
  text-align: center;
}

.skeleton__skeleton-img {
  background: #fbffd2;
  border-radius: 8px;
  height: 150px;
  max-width: 100%;
  object-fit: cover;
}

.skeleton__skeleton-title {
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 33px;
  margin-top: 10px;
  width: 80%;
  height: 20px;
  background: #e1e3c4;
  border-radius: 4px;
}
</style>
