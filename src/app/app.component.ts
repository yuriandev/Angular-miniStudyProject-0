import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pw';
  includeLetters = false;
  password = '';

  onChangeUserLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    console.log(this.includeLetters);
    this.password = 'My password';
  }
}
