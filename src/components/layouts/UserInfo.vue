<script setup>
import { reactive } from "vue";

const props = defineProps({
  user: Object,
});

const state = reactive({ status: true, display: "hidden" });
const dropdown = () => {
  state.status = !state.status;
  if (state.status) {
    state.display = "hidden";
  } else {
    state.display = "block";
  }
};
</script>

<template>
  <div class="flex items-center md:order-2">
    <button
      id="dropdownDefault"
      data-dropdown-toggle="dropdown"
      class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Dropdown button
      <svg
        class="ml-2 h-4 w-4"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="z-10 block w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
      data-popper-reference-hidden=""
      data-popper-escaped=""
      data-popper-placement="bottom"
      style="
        position: absolute;
        inset: 0px auto auto 0px;
        margin: 0px;
        transform: translate(320px, 70px);
      "
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefault"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Dashboard</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Settings</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Earnings</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>

    <div class="font-regular mr-2 ml-5 text-sm">Halo, {{ user.name }}</div>
    <div class="relative">
      <button
        type="button"
        class="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
        id="user-menu-button"
        @click="dropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full"
          :src="user.profile_photo_url"
          alt="user photo"
        />
      </button>

      <div
        class="absolute right-0 z-50 my-4 list-none divide-y divide-gray-100 rounded bg-white text-base shadow-[0_8px_16px_0px_rgba(0,0,0,0.3)] dark:divide-gray-600 dark:bg-gray-700"
        id="dropdown"
        :class="[state.display]"
      >
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{{
            user.name
          }}</span>
          <span
            class="font-regular block truncate text-sm text-gray-500 dark:text-gray-400"
            >{{ user.email }}</span
          >
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >Subscriptions</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
