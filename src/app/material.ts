import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';




@NgModule({
    imports:[MatFormFieldModule, MatButtonModule, MatCardModule,
             MatDividerModule, MatListModule, MatExpansionModule,
             MatInputModule],
    exports:[MatFormFieldModule, MatButtonModule, MatCardModule,
             MatDividerModule, MatListModule, MatExpansionModule,
             MatInputModule],
})

export class MaterialModule {

}