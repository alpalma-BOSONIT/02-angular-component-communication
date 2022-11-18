import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendMessageOutput(): void {
    this.onChildSendMessage.emit('child is using output event');
  }
}
