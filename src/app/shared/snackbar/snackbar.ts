import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Button } from "../button/button";
import { SnackbarType } from '../../core/enums/snackbarType.enum';
import { SnackbarService } from '../../core/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [Button],
  templateUrl: './snackbar.html',
  styleUrl: './snackbar.scss',
})
export class Snackbar  {

  snackbar = inject(SnackbarService);
   closeSnackbar() {
    this.snackbar.close();
  }

}
