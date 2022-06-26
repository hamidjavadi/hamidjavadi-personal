import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signOut() {
    this.authService.signOut();
  }
}
