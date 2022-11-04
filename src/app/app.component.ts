import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Gender', url: '/gender', icon: 'paper-plane' },
    { title: 'Age', url: '/age', icon: 'heart' },
    { title: 'Country', url: '/country', icon: 'archive' },
    { title: 'Weather', url: '/weather', icon: 'trash' },
    { title: 'About', url: '/about', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
