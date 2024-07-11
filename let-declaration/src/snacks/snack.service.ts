import { Injectable, computed, signal } from "@angular/core";
import { SNACKS, Snack } from "./snack";

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  // Hard-code data for now
  snacks = signal<Snack[]>(SNACKS);

  selectedSnackId = signal<number | undefined>(undefined);
  selectedSnack = computed(() => {
    if (this.selectedSnackId()) {
      return this.snacks().find(s => s.id === this.selectedSnackId());
    } else {
      return undefined;
    }
  });
    
  setSelectedSnack(id: number) {
    this.selectedSnackId.set(id);
  }

  updatePrice() {
    // To better handle null values/type narrowing
    const snack = this.selectedSnack();
    if (snack) {
      const price = snack.price * 1.2;
      const updatedSnacks = this.snacks().map(
        s => s.id === snack.id ? { ...snack, price } : s
      );
      this.snacks.set([...updatedSnacks])
    };
  }

}
