import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-hello',
  template: `<p>Привет, {{ name }}!</p>`,
  styles: []
})
export class HelloComponent {
  @Input() name: string = '';
}