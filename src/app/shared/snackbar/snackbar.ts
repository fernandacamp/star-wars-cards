import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [Button],
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.scss',
})
export class Snackbar implements OnInit {

  @Input() message: string = '';
  @Input() duration: number = 3000;
  @Input() type: 'success' | 'error' | 'info' = 'info';
  @Output() close = new EventEmitter<void>();

  ngOnInit() { 
    if (this.duration > 0) { 
      setTimeout(() => this.close.emit(), this.duration);
    }
  }
  closeSnackbar() { 
    this.close.emit();
  } 

}
