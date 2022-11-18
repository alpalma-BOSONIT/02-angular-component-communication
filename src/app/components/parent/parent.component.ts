import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  message: string = '';
  messageFromChild: string = '';

  constructor(private service: MyServiceService) {}

  get parentMessage(): string {
    return this.service.parentMessage;
  }

  ngOnInit(): void {}

  setMessage(): void {
    this.message = 'parent is using input property';
    this.service.setChildMessage('');
  }
  setMessageFromChild(value: string): void {
    this.messageFromChild = value;
  }
  setMessageFromService(): void {
    this.service.setChildMessage('parent is using services');
    this.message = '';
  }
}
