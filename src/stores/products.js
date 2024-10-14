import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { delay } from "../utils/delay";

export const useProductsStore = defineStore("products", () => {
  const data = ref([]);
  const isLoading = ref(false);

  const getData = async (brandId) => {
    try {
      isLoading.value = true;
      const response = await fetch(
        `http://localhost:7777/products${brandId ? `?brand.id=${brandId}` : ""}`
      );
      const responseData = await response.json();
      await delay();
      data.value = responseData;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const dataCount = computed(() => data.value.length);

  getData();

  return {
    data,
    dataCount,
    isLoading,
    getData,
  };
});
