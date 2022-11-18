import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private _parentMessage: string = '';
  private _childMessage: string = '';

  get parentMessage(): string {
    return this._parentMessage;
  }

  get childMessage(): string {
    return this._childMessage;
  }

  setParentMessage(): void {
    this._parentMessage = 'child is using services';
  }

  setChildMessage(): void {
    this._childMessage = 'parent is using services';
  }
}
