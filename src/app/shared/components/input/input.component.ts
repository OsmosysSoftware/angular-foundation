import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export default class InputComponent {
  @Input() control: UntypedFormControl = new UntypedFormControl();

  @Input() type = 'text';

  @Input() placeholder = '';

  @Input() format = '';

  @Input() id = '';

  @Input() name = '';

  constructor() {
    console.log('required logic');
  }
}
