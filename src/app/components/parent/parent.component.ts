import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message: string = '';
  messageFromChild: string = '';

  constructor() {}

  ngOnInit(): void {}

  setMessage(): void {
    this.message = 'parent is using input property';
  }
  setMessageFromChild(value: string): void {
    this.messageFromChild = value;
    // TODO: Listen to child's event
  }
}
