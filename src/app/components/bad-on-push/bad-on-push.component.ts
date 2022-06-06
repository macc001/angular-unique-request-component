import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bad-on-push',
  templateUrl: './bad-on-push.component.html',
  styleUrls: ['./bad-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadOnPushComponent implements OnInit {

  brol1: number = 0;
  brol2: number = 0;

  private _data: any = null;
  private _subscription = null;

  @Input()
  set data(data) {
    console.log('Data was pushed: ', data);
    this.subscribeToObservable(data);
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  private subscribeToObservable(stream$){
    this._subscription && this._subscription.unsubscribe();
    this._subscription = stream$.subscribe(data => {
      this._data = data;
      // Sans la ligne suivante, la vue ne s'actualise pas.
      // Raison: onPush vérifie si on modifie la référence passée à un input
      this._changeDetectorRef.detectChanges();
      });
  }

  ngOnInit() {
    setInterval(() => {
      this.brol1 += 50;
    }, 50);
    setInterval(() => {
      this.brol2 += 500;
    }, 500);
  }

  ngOnDestroy(){
    this._subscription && this._subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('change detected');
  }

  getDisplayValue(){
    return this._data;
  }
}