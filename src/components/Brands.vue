<template>
  <div v-if="isLoading">isLoading...</div>
  <ul class="brands">
    <li class="brands__title">
      <RouterLink
        activeClass="some-class"
        exactActiveClass="some-class"
        replace
        :to="{
          query: {},
        }"
      >
        All brands
      </RouterLink>
    </li>
    <li class="brands__items" v-for="brand in brandStore.data" :key="brand.id">
      <RouterLink
        activeClass="some-class"
        :to="{
          replace: true,
          query: { brandId: brand.id },
        }"
      >
        {{ brand.title }}
      </RouterLink>
    </li>
  </ul>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useBrandsStore } from "../stores/brands";

const brandStore = useBrandsStore();

const router = useRouter();

brandStore.getData();
</script>
<style scoped>
.some-class {
  color: rgb(64, 66, 46);
}

.brands {
  font-size: 1.5em;
  margin-bottom: 10px;
  padding: 20px;
  border-right: 2px;
}

.brands__title,
.brands__items {
  list-style: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  max-width: 100%;
  border-left: 3px solid #f6ff00;
  border-right: 3px solid #f6ff00;
  font-weight: bold;
}

.brands__items:hover,
.brands__title:hover {
  background-color: #ccc987;
}

@media (max-width: 600px) {
  .brands {
    width: 100%;
    margin-bottom: 15px;
  }

  .brands__items {
    font-size: 14px;
  }
}
</style>
