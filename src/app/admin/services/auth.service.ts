import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.setUpFireAutStateListener();
  }

  /**
   * SignIn to the Admin area
   *
   * @param email String
   * @param password String
   */
  signIn(email: string, password: string) {
    // Validate password
    if (!password) {
      throw new Error('Password is not valid');
    }

    // Validate email
    const emailControl = new FormControl(email, Validators.email);
    if (emailControl.errors) {
      throw new Error('Email is not valid');
    }

    // Start to authentication
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          this.router.navigate(['/admin/profile']);
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  /**
   * SignOut from admin area
   */
  signOut() {
    this.fireAuth.signOut();
    this.router.navigate(['/admin/signin']);
  }

  /**
   * Check if user is signedin
   *
   * @returns boolean
   */
  isSignedIn(): boolean {
    let admin = localStorage.getItem('admin');
    return !!admin;
  }

  /**
   * Manage authenticated admin data in localStorage
   *
   */
  setUpFireAutStateListener() {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('admin', JSON.stringify(user));
      } else {
        localStorage.setItem('admin', 'null');
      }
    });
  }
}
