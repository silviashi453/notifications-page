export interface Notification {
  userAva: string;
  userName: string;
  text: string;
  post?: string;
  group?: string;
  message?: string;
  commentPicture?: string;
  time: string;
  isRead: boolean;
}
