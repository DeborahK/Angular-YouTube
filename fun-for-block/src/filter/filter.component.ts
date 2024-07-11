import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
        <span>Filter by:</span>
        <input type='text'
              [(ngModel)]='filter' />
    </div>
  `
})
export class FilterComponent {
  filter = model.required({
    alias: 'filterCriteria'
  });
}
