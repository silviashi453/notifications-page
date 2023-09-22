import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/notification';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notificationList: Notification[] = [];
  unreadCount: number = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notificationList = notifications;
      this.notificationList.forEach((notif) => {
        if (!notif.isRead) {
          this.unreadCount++;
        }
      });
    });
  }

  markAllAsRead(): void {
    this.notificationService.postAllRead();
    this.unreadCount = 0;
  }
}
