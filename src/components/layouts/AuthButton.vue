<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="md:order-2">
    <RouterLink
      to="/login"
      class="mt-2 mr-2 rounded-full border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-300 hover:shadow md:py-2 md:px-8 md:text-sm"
    >
      Sign In
    </RouterLink>
    <RouterLink
      to="/register"
      class="rounded-full border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-300 hover:shadow md:py-2 md:px-8 md:text-sm"
    >
      Sign Up
    </RouterLink>
  </div>
</template>
