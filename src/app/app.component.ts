import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    data$: Observable<any>;

    constructor(){
      this.data$ = interval(5000);
    }

    value1 = 10;
    value2 = 20;
    ngOnInit() {
      setTimeout(() => {
        this.value1 += 10;
        this.value2 += 10;
      }, 5500);
      setTimeout(() => {
        this.value1 += 10;
        this.value2 += 10;
      }, 1100);
    }
}
