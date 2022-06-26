import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private authServcie: AuthService) {}

  email: string = '';
  password: string = '';

  ngOnInit(): void {}

  submit() {
    this.authServcie.signIn(this.email, this.password);
  }
}
