import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularIO';
    work: string = "";
   todos: string[] = [];
    add() {
      this.todos.push(this.work);
      this.work = "";
}
}
