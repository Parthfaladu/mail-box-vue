<template>
  <div></div>
</template>
<script setup lang="ts">
const router = useRouter();

// Define a function to redirect to the inbox route
const redirectToInbox = () => {
  router.push("/inbox");
};

redirectToInbox();
</script>
