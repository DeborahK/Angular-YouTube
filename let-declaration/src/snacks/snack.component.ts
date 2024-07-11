import { Component, inject } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SnackService } from './snack.service';
import { Snack } from './snack';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [NgClass, CurrencyPipe],
  templateUrl: './snack.component.html'
})
export class SnackComponent {
  pageTitle = 'Snacks';
  snackService = inject(SnackService);

  snacks = this.snackService.snacks;
  selectedSnack = this.snackService.selectedSnack;

  calculateAllPrice(snack: Snack) {
    return snack.numberInStock * snack.price;
  }

  showDetail(id: number) {
    this.snackService.setSelectedSnack(id);
  }

  changePrice() {
    this.snackService.updatePrice();
  }

}
