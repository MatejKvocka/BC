import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/services/coin.service';
import { CoinDialogService } from 'src/services/coin-dialog.service';



@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  coins: any[] = [];

  constructor(private coinService:CoinService, private dialogService: CoinDialogService) { }

  ngOnInit(): void {
    this.getCoins();
  }
  getCoins() {
    this.coinService.getCoins().subscribe(
      coins => this.coins = coins,
      error => console.error('Error retrieving coins:', error)
    );
  }
  openCoinDialog(coin: any) {
    this.dialogService.openCoinDialog(coin);
  }
}