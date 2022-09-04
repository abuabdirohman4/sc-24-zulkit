<script setup>
import FeatureLists from "@/components/authentication/FeatureLists.vue";
import axios from "axios";

async function checkout(price) {
  try {
    console.log("price : ", price);
    const response = await axios.post(
      "https://zullkit-backend.buildwithangga.id/api/checkout",
      {
        payment_total: price,
        payment_status: "PENDING",
      },
      {
        headers: {
          Authorization:
            localStorage.getItem("token_type") +
            " " +
            localStorage.getItem("access_token"),
        },
      }
    );
    window.location.href = response.data.data.payment_url;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div class="flex w-full flex-col items-center sm:justify-center sm:pt-0">
        <div class="mx-auto mt-10 w-full p-5 md:max-w-7xl">
          <h2 class="mb-4 text-center text-5xl font-bold">
            <span class="block lg:mb-2">Friendly Pricing,</span>
            <span class="block">High Quality Design</span>
          </h2>
          <p class="mb-5 text-center text-lg text-gray-500">
            Working faster and better than before
          </p>
        </div>
        <div class="mx-auto mb-10 w-full p-5 md:max-w-4xl">
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div class="rounded-3xl border p-8">
                <h1 class="text-5xl font-semibold">
                  IDR 2,000
                  <span class="text-xl font-light text-gray-500">/month</span>
                </h1>
                <h2 class="mt-7 text-lg font-semibold">Basic Plan</h2>
                <p class="mb-6 text-gray-500">Suitable for new team</p>
                <ul class="mb-6 text-gray-700">
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Customizable layers
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Official documentation
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    SVG icons
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    SVG illustrations
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Pre-built design screen
                  </li>
                </ul>
                <!-- <RouterLink -->
                <button
                  @click="checkout(2000)"
                  class="md:text-md inline-flex w-full items-center justify-center rounded-full border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-300 hover:shadow md:py-2 md:px-10"
                >
                  Checkout Now
                </button>
              </div>
            </div>
            <div>
              <div class="rounded-3xl border p-8">
                <h1 class="text-5xl font-semibold">
                  IDR 9,000
                  <span class="text-xl font-light text-gray-500">/month</span>
                </h1>
                <h2 class="mt-7 text-lg font-semibold">Gold Plan</h2>
                <p class="mb-6 text-gray-500">Suitable for big company</p>
                <ul class="mb-6 text-gray-700">
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Customizable layers
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Official documentation
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    SVG icons
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    SVG illustrations
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Pre-built design screen
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Coded template
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Support 24/7
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Private designer group
                  </li>
                  <li class="mb-3">
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-left mr-2 w-6"
                      alt=""
                    />
                    Unlock cloning app
                  </li>
                </ul>
                <button
                  @click="checkout(9000)"
                  class="md:text-md inline-flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 hover:shadow md:py-2 md:px-10"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mb-10 w-full p-5 md:max-w-7xl">
          <div class="mx-auto grid grid-cols-1 gap-4 md:mx-0 md:grid-cols-3">
            <FeatureLists />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
