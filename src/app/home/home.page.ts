import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  listElements: any[] = [
    {numberSound:1, color:'#a52a2a'},
    {numberSound:2, color:'#1e1d1d'},
    {numberSound:3, color:'#7fffd4'},
    {numberSound:4, color:'#b8860b'},
    {numberSound:5, color:'#9acd32'},
    {numberSound:6, color:'#ff7f50'},
    {numberSound:7, color:'#faebd7'},
  ];

  activateSound(numberSound: number) {
    const audio = new Audio();
    audio.src = '../../assets/sounds/note' + numberSound + '.wav';
    audio.load();
    audio.play();
  }

}
