import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports:[MatFormFieldModule, MatButtonModule],
    exports:[MatFormFieldModule, MatButtonModule],
})

export class MaterialModule {

}