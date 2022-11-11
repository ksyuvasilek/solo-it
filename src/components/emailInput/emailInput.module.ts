import { NgModule } from '@angular/core';
import { TuiInputEmail } from './emailInput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TuiInputEmail
    ],
    bootstrap: [TuiInputEmail]
})

export class TuiInputEmailModule { }