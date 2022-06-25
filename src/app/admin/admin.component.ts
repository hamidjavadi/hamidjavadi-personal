import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @ViewChild('drawer', { static: true }) domDrawer!: MatDrawer;
  theDrawer!: MatDrawer;

  ngOnInit() {
    // this.authService.signIn(
    //   'javadi.business@gmail.com',
    //   'Business@firebase!31458929'
    // );
  }

  toggleSidebar() {
    this.domDrawer.toggle();
  }
}
