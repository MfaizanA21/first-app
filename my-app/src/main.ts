import 'zone.js';
import {Component, EventEmitter, Output} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'test',
  standalone: true,
  imports: [FormsModule],
  template: `
    <br>
      <label for = 'name'> Name: </label> 
      <input type = 'text' id = 'name' name = 'name' [(ngModel)] = "welcome_name" (ngModelChange) = onNameChange($event)>
  `
})
export class Test {
  welcome_name: string = '';

  @Output() nameChange = new EventEmitter<string>();

  onNameChange(newName: string) {
    this.welcome_name = newName;
    this.nameChange.emit(this.welcome_name);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Test],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about {{ name }}
    </a>
    <br>
    <test (nameChange) = "onNameChange($event)"></test>
  `,
})
export class App {
  name = 'Angular';

  onNameChange(newName: string) {
    this.name = newName
  }
}

// bootstrapApplication(App);
