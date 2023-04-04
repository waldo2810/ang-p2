import { EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
