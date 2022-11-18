import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() onChildSendMessage: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private service: MyServiceService) {}

  get childMessage(): string {
    return this.service.childMessage;
  }

  ngOnInit(): void {}

  sendMessageOutput(): void {
    this.onChildSendMessage.emit('child is using output event');
    this.service.setParentMessage('');
  }
  setParentMessageService(): void {
    this.service.setParentMessage('child is using services');
  }
}
