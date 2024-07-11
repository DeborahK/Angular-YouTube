import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    private userUrl = "https://jsonplaceholder.typicode.com/users";
    private http = inject(HttpClient);

    // Read-only data
    members = toSignal(this.http.get<User[]>(this.userUrl), {initialValue:[] });

    getCurrentMember(id: number): User | undefined {
      return this.members().find(m => m.id === id);
    }

  }

  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
  }


  