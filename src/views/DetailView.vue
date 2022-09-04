<script setup>
import Gallery from "../components/detail/Gallery.vue";
import { RouterLink } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useUserStore } from "../stores/user";

const route = useRoute();
const item = ref(false);
// const item = ref({})

const userStore = useUserStore();
const user = computed(() => userStore.user);

async function getProduct() {
  try {
    const response = await axios.get(
      `https://zullkit-backend.buildwithangga.id/api/products?id=${route.params.id}`
    );
    // console.log('hai ini data', response)
    item.value = response.data.data;
  } catch (error) {
    console.log(error);
  }
}

const features = computed(() => {
  return item.value.features.split(",");
});

onMounted(() => {
  window.scrollTo(0, 0);
  getProduct();
  userStore.fetchUser();
});
</script>

<template>
  <main v-if="item">
    <div class="container mx-auto my-10 max-w-7xl p-2">
      <div class="flex flex-row flex-wrap py-4">
        <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1
            class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
          >
            {{ item.name }}
          </h1>
          <p class="text-gray-500">{{ item.subtitle }}</p>
          <Gallery
            :defaultImage="item.thumbnails"
            :galleries="item.galleries"
          />
          <section class="" id="orders">
            <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
            <div class="text-gray-500" v-html="item.description"></div>
          </section>
        </main>
        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
          <div class="sticky top-0 w-full pt-4 md:mt-24">
            <div class="rounded-2xl border p-6">
              <div class="mb-4" v-if="item.is_figma == 1">
                <div class="mb-2 flex">
                  <div>
                    <img
                      src="@/assets/img/icon-figma.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="mt-1 ml-4 block">
                    <h3 class="text-md font-semibold">Figma</h3>
                    <p class="text-md text-gray-400">Project Included</p>
                  </div>
                </div>
              </div>

              <div class="mb-4" v-if="item.is_sketch == 1">
                <div class="mb-2 flex">
                  <div>
                    <img
                      src="@/assets/img/icon-sketch.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="mt-1 ml-4 block">
                    <h3 class="text-md font-semibold">Sketch</h3>
                    <p class="text-md text-gray-400">Project Included</p>
                  </div>
                </div>
              </div>

              <div>
                <h1 class="text-md mt-5 mb-3 font-semibold">Great Features</h1>
                <ul class="mb-6 text-gray-500" v-if="item">
                  <li class="mb-2" v-for="feature in features">
                    {{ feature }}
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-right w-5"
                      alt=""
                    />
                  </li>
                </ul>
              </div>

              <a
                v-if="user.data.subscription.length > 0"
                :href="item.file"
                class="md:text-md inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:shadow md:py-2 md:px-10"
              >
                Download Now
              </a>
              <RouterLink
                v-else
                to="/pricing"
                class="md:text-md inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:shadow md:py-2 md:px-10"
              >
                Subscribe
              </RouterLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>
