<template>
  <div class="email-menu">
    <div class="top-logo">
      <img src="~/assets/image/logo.svg" alt="top-logo" />
    </div>
    <div class="menu-list font-weight-500 ml-12 mr-12">
      <div>
        <div
          v-for="(menu, index) in menus"
          class="menu-list-li mb-12"
          :class="{ 'active-menu': $route.path === menu.route }"
          :key="index"
        >
          <div class="justify-between d-flex">
            <div class="d-flex">
              <img :src="menu.icon" alt="inbox" />
              <router-link
                class="text-decoration-none ml-12"
                :to="menu.route"
                >{{ menu.title }}</router-link
              >
            </div>
            <div>{{ menu.count }}</div>
          </div>
        </div>

        <div class="menu-list-li fixed-bottom">
          <div class="justify-between d-flex">
            <div class="d-flex">
              <img src="~/assets/image/logout.svg" alt="logout" />
              <div class="ml-12">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMailStore } from "@/stores/mail";
import inboxIcon from "~/assets/image/inbox-Icon.svg";
import archiveIcon from "~/assets/image/archive-icon.svg";

const store = useMailStore();

const activeMails = computed(() => store.activeMails.length);
const archiveMails = computed(() => store.archiveMails.length);

const menus = [
  {
    title: "Inbox",
    route: "/inbox",
    icon: inboxIcon,
    count: activeMails,
  },
  {
    title: "Archive",
    route: "/archive",
    icon: archiveIcon,
    count: archiveMails,
  },
];
</script>
