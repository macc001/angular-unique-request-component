import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Log } from '@angular/core/testing/src/logger';

@Injectable()
export class CommunicationService {
  private subject = new Subject<any>();
  requestItem!: any;
  flag = true;

  constructor(private httpClient: HttpClient) {}

  setRequest(data: I_Request) {
    if (!this.requestItem && this.flag) {
      this.getContacts().subscribe((resp) => {
        this.requestItem = resp.body.data;
        // console.log(this.requestItem);
        this.flag = false;
        this.subject.next({ text: this.requestItem });
      });
    } else {
      if (this.flag === false && this.requestItem) {
        this.subject.next({ text: this.requestItem });
      }
    }
  }

  getDetail(id: number) {}

  clearMessages() {
    this.subject.next();
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getContacts(url?: string) {
    const apiURL: string = 'https://reqres.in/api/products/3';
    return this.httpClient.get<any>(`${apiURL}`, { observe: 'response' }).pipe(
      tap((res) => {
        return res;
      })
    );
  }
}

interface I_Request {
  id: number;
  url: string;
}
