import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  function add(product) {
    if (get(product)) return;

    cart.value.push(product);
  }

  const count = computed(() => cart.value.length);

  const remove = (product) => {
    cart.value = cart.value.filter((item) => item.id !== product.id);
  };

  const get = (product) => cart.value.some((item) => item.id === product.id);

  const cartTotal = computed(() =>
    cart.value.reduce(
      (total, product) => total + product.regular_price.value,
      0
    )
  );

  return { cart, add, count, get, remove, cartTotal };
});
