import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-good-on-push',
  templateUrl: './good-on-push.component.html',
  styleUrls: ['./good-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodOnPushComponent implements OnInit {

  brol1: number = 0;
  brol2: number = 0;

  private _data: any = null;

  @Input()
  set data(data) {
    console.log('Data was pushed: ', data)
    this._data = data;
  }

  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log('change detected');
  }

  getDisplayValue(){
    return this._data;
  }
}