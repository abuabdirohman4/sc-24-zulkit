<script setup>
import ItemsCard from "./../ItemsCard.vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { ref, onMounted } from "vue";

const route = useRoute();
const items = ref([false]);
const category = ref({});

async function getItemsData() {
  try {
    // const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/categories?id='+ 1 +'&show_product=1')
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories?id=" +
        route.params.id +
        "&show_product=1"
    );
    // console.log(response.data.data.name)
    items.value = response.data.data.products;
    category.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getItemsData();
});
</script>

<template>
  <div class="container mx-auto my-16 px-4 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ category.name }}
    </h2>
    <div class="-mx-1 flex flex-wrap lg:-mx-4" v-if="items.length > 0">
      <ItemsCard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.subtitle"
        :image="item.thumbnails"
      />
    </div>
    <div class="" v-else>
      <div class="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:w-1/3 lg:px-4">
          There is no items
      </div>
    </div>
  </div>
</template>
