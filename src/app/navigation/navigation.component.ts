import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  userId: string | null = null;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(userPayload => {
      if(userPayload){
        this.userId = userPayload.userId;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
