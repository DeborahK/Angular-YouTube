import { Injectable, signal } from "@angular/core";
import { SNACKS, Snack } from "./snack";

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  // Hard-code data for now
  snacks = signal<Snack[]>(SNACKS);
}
