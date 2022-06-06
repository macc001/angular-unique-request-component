import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-default-change-strategy',
  templateUrl: './default-change-strategy.component.html',
  styleUrls: ['./default-change-strategy.component.css']
})
export class DefaultChangeStrategyComponent implements OnInit {

  private _data: any = null;
  
  brol1: number = 0;
  brol2: number = 0;

  @Input()
  set data(data) {
    console.log('Data was pushed: ', data)
    this._data = data;
  }

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.brol1 += 50;
    }, 50);
    setInterval(() => {
      this.brol2 += 500;
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change detected');
  }

  getDisplayValue() {
    return this._data;
  }
}