import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  useMyRewards() {
    window.location.href = 'https://www-qa2-origin.tomthumb.com/justforu/rewards.html';
  }
}
