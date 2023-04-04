import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  @Input() nameButton: string = 'search';
  @Output() emitEvent: EventEmitter<void> = new EventEmitter();
}
