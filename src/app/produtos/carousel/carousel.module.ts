
import { CarouselComponent } from './carousel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CarouselComponent
    ]
})
export class CarouselModule {}
