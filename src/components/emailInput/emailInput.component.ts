import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
 
@Component({
    selector: `tui-input-email`,
    templateUrl: `./emailInput.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputEmail {
    readonly testForm = new FormGroup({
        testValue: new FormControl(`mail@mail.ru`),
    });
}