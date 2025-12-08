import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  @Input() label: string = 'Button';
  @Input() disable: boolean = false;
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Output() click = new EventEmitter<void>();

  handleClick() {
    if(!this.disable)
      this.click.emit();
  }

}
