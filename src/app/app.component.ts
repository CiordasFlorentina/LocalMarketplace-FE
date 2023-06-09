import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user$: Observable<User| null>;

  constructor(private authS: AuthService) {
    this.user$ = this.authS.currentUser$;
  }

  logout() {
    this.authS.logout();
  }
}
