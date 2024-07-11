import { Component, computed, inject, signal } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { DecimalPipe, NgClass } from '@angular/common';
import { SnackService } from './snack.service';
import { Snack } from './snack';

@Component({
  selector: 'app-snack',
  standalone: true,
  imports: [FilterComponent, DecimalPipe, NgClass],
  templateUrl: './snack.component.html'
})
export class SnackComponent {
  pageTitle = 'Snacks';

  snackService = inject(SnackService);

  listFilter = signal('');
  snacks = this.snackService.snacks;
  filteredSnacks = computed(() =>
    this.snacks().filter(s => s.name.includes(this.listFilter())));

  trackSnack(index: number, snack: Snack) {
    // Some complex code here
    return snack.id;
  }

}
