<template>
    <div>
      <div class="main-mail-box d-flex text-base">
        <Sidebar />
        <div class="email-main w-full">
            <slot />
        </div>
      </div>
  </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps(['title']);
  </script>