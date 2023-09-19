<template>
  <!-- Modal Container -->
  <div id="modal" class="modal-container">
    <!-- Modal Content -->
    <div class="padding-32 modal-content text-base">
      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <div class="close-button cursor-pointer" @click="closeModal">
            &times;
          </div>
          <div class="text-base font-weight-500 ml-12">Close (Esc)</div>
        </div>
        <Action
          :isMargin="false"
          @markasread="onMarkAsRead"
          @archive="onMarkAsArchive"
        />
      </div>
      <div class="margin-top-32 text-base">
        <div class="title">
          {{ mail.subject }}
        </div>
        <div class="margin-top-20">
          <p>
            {{ mail.mail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MailItem } from "@/interfaces/types";
import { useMailStore } from "@/stores/mail";

const props = defineProps<{
  mail: MailItem;
}>();

const store = useMailStore();

const emit = defineEmits(["closeModal"]);

const onMarkAsRead = () => {
  store.markAsReadSingle(props.mail.id);
  closeModal();
};

const onMarkAsArchive = () => {
  store.markAsArchiveSingle(props.mail.id);
  closeModal();
};

const closeModal = () => {
  emit("closeModal");
};
</script>
