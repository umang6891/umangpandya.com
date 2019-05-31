import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
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
