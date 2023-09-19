<template>
  <div class="d-flex text-sm">
    <div class="d-flex cursor-pointer" @click="markAsRead">
      <img
        src="~/assets/image/mark-as-read-icon.svg"
        width="19"
        alt="Mark as read"
      />
      <div class="ml-12" :class="{ 'mt-26': isMargin }">Mark as read (r)</div>
    </div>
    <div
      v-if="$route.path !== '/archive'"
      class="d-flex ml-40 cursor-pointer"
      @click="archive"
    >
      <img src="~/assets/image/trash.svg" alt="Archive" width="19" />
      <div class="ml-12" :class="{ 'mt-26': isMargin }">Archive (a)</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  isMargin: Boolean;
}>();

const emit = defineEmits(["markasread", "archive"]);

// Define functions to emit custom events
const markAsRead = () => {
  // Emit a custom event named "mark-as-read"
  emit("markasread");
};

const archive = () => {
  // Emit a custom event named "archive"
  emit("archive");
};
</script>
