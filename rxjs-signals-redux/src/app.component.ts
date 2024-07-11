import { Component, inject } from '@angular/core';
import { ToDo, TodoService } from './todo.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html'
})
export class App {
  name = 'Angular';
  
  // Services
  userService = inject(UserService);
  todoService = inject(TodoService);

  // Signals  
  users = this.userService.members;
  isLoading = this.todoService.isLoading;
  currentMember = this.todoService.currentMember;
  todosForMember = this.todoService.filteredToDos;
  errorMessage = this.todoService.errorMessage;

  // Actions
  onFilter(ele:EventTarget | null) {
    this.todoService.filterToDos((ele as HTMLInputElement).checked)
  }

  onSelected(ele:EventTarget | null) {
    this.todoService.getToDosForMember(Number((ele as HTMLSelectElement).value));
  }

  onChangeStatus(task: ToDo, ele: EventTarget | null) {
    this.todoService.changeStatus(task, (ele as HTMLInputElement).checked);
  }

}

