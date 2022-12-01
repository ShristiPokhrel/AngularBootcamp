import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
name: any = 'Shristi Pokhrel';

  constructor() { }

  ngOnInit(): void {
  }

}
