import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private notificationService: NotificationService) {}
  markAllAsRead(): void {
    this.notificationService.postAllRead();
  }
}
