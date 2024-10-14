import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { delay } from "../utils/delay";

export const useBrandsStore = defineStore("brands", () => {
  const data = ref([]);
  const isLoading = ref(false);

  const getData = async () => {
    try {
      isLoading.value = true;
      const response = await fetch(" http://localhost:7777/brands");
      const responseData = await response.json();
      await delay();
      data.value = responseData;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  getData();

  const dataCount = computed(() => data.value.length);

  return {
    data,
    dataCount,
    isLoading,
    getData,
  };
});
