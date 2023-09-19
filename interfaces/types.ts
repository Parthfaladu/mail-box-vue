// Define a type for an individual mail object
export interface MailItem {
    isSelected: boolean;
    subject: string;
    mail: string;
    isRead: boolean;
    isArchived: boolean;
  }
  
  // Define a type for the array of mail items
export type MailList = MailItem[];