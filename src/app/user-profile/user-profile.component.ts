import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/services/coin.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId: string | null = null;
  collectedCoins: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId'); // Make sure this is the correct parameter name
    
    if (userId === null) {
      console.error('User ID is null');
      return;
    }

    this.userId = userId;
    this.coinService.getCollectedCoins(this.userId)
      .subscribe((coins: any[]) => {
        this.collectedCoins = coins.map(coin => {
          let imageUrl = 'assets/images/default.jpg';
          if (coin.img_url && typeof coin.img_url === 'string') {
            const parts = coin.img_url.split('/');
            const filename = parts[parts.length - 1];
            imageUrl = 'assets/images/' + filename;
          }
          return {
            ...coin,
            img_url: imageUrl,
          };
        });
      });
  }
}
