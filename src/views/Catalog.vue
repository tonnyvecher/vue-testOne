<template>
  <main class="catalog">
    <aside class="catalog__brands">
      <Brands />
    </aside>
    <section class="catalog__products">
      <h3 class="catalog-name">Сatalog</h3>
      <h4 class="catalog-count">
        {{ productStore.isLoading ? ".." : productStore.dataCount }} products
      </h4>

      <Products />
    </section>
  </main>
</template>
<script setup>
import Brands from "../components/Brands.vue";
import Products from "../components/Products.vue";
import { useProductsStore } from "../stores/products";

const productStore = useProductsStore();
</script>
<style scoped>
main {
  padding: 10px;
}

.catalog__brands {
  background: #fff;
  margin: 0 0 1.5em;
  border-radius: 6px;
  overflow: hidden;
  float: left;
}

.catalog__products {
  padding: 50px 0;
}

.catalog-name,
.catalog-count {
  display: inline-block;
  margin: 7px;
  font-size: 2rem;
  padding: 10px 17px;
}

.catalog-name {
  color: rgb(64, 66, 46);
}

.catalog-count {
  color: #b3b3b7;
}

@media (max-width: 600px) {
  .catalog-name {
    font-size: 14px;
  }

  .catalog-count {
    font-size: 14px;
  }

  .catalog__products {
    padding: 10px;
    margin-bottom: 15px;
  }

  .catalog__brands {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 15px;
  }
}
</style>
