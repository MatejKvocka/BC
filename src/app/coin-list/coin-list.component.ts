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
  groupedCoins: { [key: string]: any[] } = {};
  years: string[] = [];
  countries: string[] = [];
  selectedYear: string = '';
  selectedCountry: string = '';

  constructor(private coinService:CoinService, private dialogService: CoinDialogService) { }

  ngOnInit(): void {
    this.getCoins();
    this.getYears();
    this.getCountries();
  }

  getCoins() {
    this.coinService.getCoins().subscribe(
      coins => {
        this.coins = coins.map(coin => {
          let imageUrl = 'assets/images/default.jpg';  // default image URL
          if (coin.img_url && typeof coin.img_url === 'string') {
            const parts = coin.img_url.split('/');
            const filename = parts[parts.length - 1];  // Take the last element of the array
            imageUrl = 'assets/images/' + filename;
          }
          return {
            ...coin, 
            img_url: imageUrl
          }
        });
        this.groupByCountry();
      },
      error => console.error('Error retrieving coins:', error)
    );
  }

  groupByCountry() {
    this.groupedCoins = this.coins.reduce((grouped, coin) => {
      const key = coin.country;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(coin);
      return grouped;
    }, {});
  }

  getYears() {
    this.coinService.getCoinYears().subscribe(
      years => {
        this.years = years;
      },
      error => console.error('Error retrieving years:', error)
    );
  }

  getCountries() {
    this.coinService.getCoinCountries().subscribe(
      countries => {
        this.countries = countries;
      },
      error => console.error('Error retrieving countries:', error)
    );
  }

  filterCoins() {
    // Filter the coins based on the selected year and country
    let filteredCoins = this.coins;

    if (this.selectedYear) {
      filteredCoins = filteredCoins.filter(coin => coin.year === this.selectedYear);
    }

    if (this.selectedCountry) {
      filteredCoins = filteredCoins.filter(coin => coin.country === this.selectedCountry);
    }

    // Group the filtered coins by country
    this.groupedCoins = filteredCoins.reduce((grouped, coin) => {
      const key = coin.country;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(coin);
      return grouped;
    }, {});
  }
  clearFilters() {
    // Reset filters and show all coins
    this.selectedYear = '';
    this.selectedCountry = '';
    this.groupByCountry();
  }

  openCoinDialog(coin: any) {
    this.dialogService.openCoinDialog(coin);
  }
}
