<template>
  <div>
    <div class="mt-12 justify-between d-flex pr-24">
      <div class="d-flex align-center pl-24 py-24">
        <input id="email-selected" type="checkbox" @change="toggleAllSelect" />
        <label for="email-selected" class="text-base font-weight-500 ml-12"
          >Email Selected ({{ selectedMails.length }})</label
        >
      </div>
      <Action
        @markasread="onMarkAsRead"
        @archive="onMarkAsArchive"
        :isMargin="true"
      />
    </div>
    <div>
      <div
        v-for="(mail, index) in props.mails"
        class="d-flex align-center pl-24 py-24 mail-list pr-24"
        :key="index"
      >
        <input
          v-model="mail.isSelected"
          :selected="mail.isSelected"
          type="checkbox"
        />
        <label
          class="text-base font-weight-500 ml-12"
          :class="{ 'text-gray': mail.isRead }"
          @click="onSubjectClick(mail)"
          >{{ mail.subject }}</label
        >
      </div>
    </div>
    <transition name="slide-right" appear>
      <Modal
        v-if="showModal"
        :mail="selectedMail"
        @closeModal="showModal = false"
      />
    </transition>
  </div>
</template>
<script setup lang="ts">
import Action from "@/components/Action.vue";
import { defineProps, ref } from "vue";
import { MailList, MailItem } from "@/interfaces/types";
import { useMailStore } from "@/stores/mail";
import Modal from "@/components/Modal.vue";

definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
});
const store = useMailStore();

// Define the type for the 'mails' prop
const props = defineProps<{
  mails: MailList;
  type: string;
}>();

const showModal = ref(false);
const selectedMail = ref<MailItem | null>(null);

const selectedMails = computed(() => store.selectedMails(props.type));

const onMarkAsRead = () => {
  store.markAsRead(props.type);
};

const onMarkAsArchive = () => {
  store.markAsArchive();
};

const toggleAllSelect = () => {
  store.toggleSelectAll(props.type);
};

const onSubjectClick = (mail: MailItem) => {
  showModal.value = true;
  selectedMail.value = mail;
};
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
