import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigationOptions = [
    {
      title: 'Home',
      url: '',
    },
    // {
    //   title: 'Photography',
    //   url: '/photography',
    // }, {
    //   title: 'Travel',
    //   url: '/travel',
    // }, {
    //   title: 'Fashion',
    //   url: '/fashion',
    // },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
