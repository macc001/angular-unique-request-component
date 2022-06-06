import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { CommunicationService } from '../../service/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-good-on-push',
  templateUrl: './good-on-push.component.html',
  styleUrls: ['./good-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodOnPushComponent implements OnInit, OnDestroy {
  private _data: any = null;
  subscription: Subscription;

  @Input()
  set data(data) {
    this._data = data;
    this.communication.setRequest(this._data);
  }

  constructor(private communication: CommunicationService) {
    this.subscription = this.communication.onMessage().subscribe((message) => {
       console.log(message);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {}

  getDisplayValue() {
    return this._data;
  }
}
