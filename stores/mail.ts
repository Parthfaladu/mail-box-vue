import { defineStore } from "pinia";
import { MailList } from "@/interfaces/types";

export const useMailStore = defineStore("mail", {
  state: () => ({
    // Define your store's state properties here
    mails: [
      {
        id: 1,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 2,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 3,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 4,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 5,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 6,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 7,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 8,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 9,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 10,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 11,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 12,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: false,
      },
      {
        id: 13,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 14,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 15,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 16,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 17,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 18,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 19,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 20,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 21,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 22,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 23,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 24,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 25,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 26,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 27,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 28,
        isSelected: false,
        subject: "Wave hello with video, reactions and more now in huddles",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
      {
        id: 29,
        isSelected: false,
        subject:
          "[JIRA](LXQ-2604)Learning path-file-Existing File-two buttons for viewing the file",
        mail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isRead: false,
        isArchived: true,
      },
    ],
  }),

  // Define your store's getters
  getters: {
    activeMails(): MailList {
      return this.mails.filter((mail) => !mail.isArchived);
    },
    archiveMails(): MailList {
      return this.mails.filter((mail) => mail.isArchived);
    },
    selectedMails: (state) => (type: string) => {
      if (type === "inbox") {
        return state.mails.filter(
          (mail) => !mail.isArchived && mail.isSelected
        );
      } else {
        return state.mails.filter((mail) => mail.isArchived && mail.isSelected);
      }
    },
  },

  actions: {
    toggleSelectAll(type: string) {
      if (type === "inbox") {
        this.mails.forEach((mail) => {
          if (!mail.isArchived) {
            mail.isSelected = !mail.isSelected;
          }
        });
      } else {
        this.mails.forEach((mail) => {
          if (mail.isArchived) {
            mail.isSelected = !mail.isSelected;
          }
        });
      }
    },
    markAsRead(type: string) {
      if (type === "inbox") {
        this.mails.forEach((mail) => {
          if (!mail.isArchived && mail.isSelected) {
            mail.isRead = true;
            mail.isSelected = false;
          }
        });
      } else {
        this.mails.forEach((mail) => {
          if (mail.isArchived && mail.isSelected) {
            mail.isRead = true;
            mail.isSelected = false;
          }
        });
      }
    },
    markAsArchive() {
      this.mails.forEach((mail) => {
        if (!mail.isArchived && mail.isSelected) {
          mail.isArchived = true;
        }
      });
    },
    markAsReadSingle(mailId: number) {
      const selectedMail = this.mails.find((mail) => mail.id === mailId);
      if (selectedMail) {
        selectedMail.isRead = true;
      }
    },
    markAsArchiveSingle(mailId: number) {
      const selectedMail = this.mails.find((mail) => mail.id === mailId);
      if (selectedMail) {
        selectedMail.isArchived = true;
      }
    },
  },
});
