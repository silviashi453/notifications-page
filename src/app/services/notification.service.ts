import { Injectable } from '@angular/core';
import { Notification } from '../notification';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}
  notificationList: Notification[] = [
    {
      userAva: 'avatar-mark-webber.webp',
      userName: 'Mark Webber',
      text: 'reacted to your recent post',
      post: 'My first tournament today!',
      time: '1m',
      isRead: false,
    },
    {
      userAva: 'avatar-angela-gray.webp',
      userName: 'Angela Gray',
      text: 'followed you',
      time: '5m',
      isRead: false,
    },
    {
      userAva: 'avatar-jacob-thompson.webp',
      userName: 'Jacob Thompson',
      text: 'has joined your group',
      group: 'Chess Club',
      time: '1day',
      isRead: false,
    },
    {
      userAva: 'avatar-rizky-hasanuddin.webp',
      userName: 'Rizky Hasanuddin',
      text: 'sent you a private message',
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days',
      isRead: true,
    },
    {
      userAva: 'avatar-kimberly-smith.webp',
      userName: 'Kimberly Smith',
      text: 'commented on your picture',
      commentPicture: 'image-chess.webp',
      time: '1 week',
      isRead: true,
    },
    {
      userAva: 'avatar-nathan-peterson.webp',
      userName: 'Nathan Peterson',
      text: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
      time: '2 weeks',
      isRead: true,
    },
    {
      userAva: 'avatar-anna-kim.webp',
      userName: 'Anna Kim',
      text: 'left the group',
      group: 'Chess Club',
      time: '2 weeks',
      isRead: true,
    },
  ];
  unreadCount: number = 0;

  getNotifications(): Observable<Notification[]> {
    return of(this.notificationList);
  }

  postAllRead(): void {
    this.notificationList.forEach((notification) => {
      if (!notification.isRead) {
        notification.isRead = true;
      }
    });
  }
}
