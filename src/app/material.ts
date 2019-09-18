import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';




const material = [MatFormFieldModule, MatButtonModule, MatCardModule,
                  MatDividerModule, MatListModule, MatExpansionModule,
                  MatInputModule, MatChipsModule, MatMenuModule,
                  MatToolbarModule]


@NgModule({
    imports: material,
    exports: material,
})

export class MaterialModule {

}