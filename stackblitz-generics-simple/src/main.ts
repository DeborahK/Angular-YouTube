import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>Snack: {{ snack().name }} In stock: {{snack().isInStock}}</div>
    <div><button (click)='updateSnack()'>Update Snack</button></div>
    <br/>
    <div>User: {{ user().name }}</div>
    <div><button (click)='updateUser()'>Update User</button></div>
  `,
})
export class App {

  snack = signal<Snack>(SNACK);
  user = signal<User>(USER);

  updateSnack() {
    updateProperty(this.snack, 'name', 'peanut');
    logSignal(this.snack, 'name');
    //console.log(this.snack());
    //console.log(this.snack().name);
    //console.log(this.snack()['name']);
  }

  updateUser() {
    updateProperty(this.user, 'name', 'Frodo');
    logSignal(this.user);
  }
}

export function updateProperty<T, K extends keyof T>(sg: WritableSignal<T>, 
                                                     prop: K, value: T[K]) {
  sg.update(obj => ({
    ...obj,
    [prop]: value
  }))
}
// export function updateProperty<T>(sg: WritableSignal<T>, 
//                                   prop:  keyof T, value: T[keyof T]) {
//   sg.update(obj => ({
//     ...obj,
//     [prop]: value
//   }))
// }

export function logSignal<T>(sg: Signal<T>, prop?: keyof T) {
  if (prop) {
    // Doesn't work
    //console.log(sg.prop);
    console.log(sg()[prop]);
  } else {
    console.log(sg());
  }
}

bootstrapApplication(App);

export const SNACK: Snack = { id: 1, name: 'popcorn', price: 2.0, isInStock: true };
export const USER: User = { id: 5, name: 'Bilbo', userName: 'Hobbit1' };

export interface Snack {
  id: number;
  name: string;
  price: number;
  isInStock: boolean;
}
export interface User {
  id: number;
  name: string;
  userName: string;
}

