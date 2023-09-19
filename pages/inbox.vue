<template>
  <div class="top-heading text-lg mt-24 font-weight-500">
    <div class="pl-24">Inbox</div>
    <Mail :mails="mails" type="inbox" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Mail from "/components/Mail.vue";
import { MailList } from "@/interfaces/types";
import { useMailStore } from "@/stores/mail";

const store = useMailStore();

const mails = computed<MailList>(() => store.activeMails);
</script>
