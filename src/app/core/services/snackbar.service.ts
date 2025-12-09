import { Injectable, signal } from '@angular/core';
import { SnackbarType } from '../enums/snackbarType.enum';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    readonly isVisible = signal(false);
    readonly message = signal('');
    readonly type = signal<SnackbarType>(SnackbarType.Info);

    show(message: string, type: SnackbarType = SnackbarType.Info, duration = 3000) {
        this.message.set(message);
        this.type.set(type);
        this.isVisible.set(true);

        setTimeout(() => this.close(), duration);
    }

    close() {
        this.isVisible.set(false);
    }
}
