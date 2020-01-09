import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { CamelizePipe } from 'ngx-pipes';

import { MapService } from './map.service';

@NgModule({
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCGLArB3Y42Dt9H6pEZFxk8lC6MfbpJoEE'
        }),
        CommonModule
    ],
    providers: [
        MapService,
        CamelizePipe
    ]
})
export class MapModule{

}