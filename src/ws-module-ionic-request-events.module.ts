import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicRequestEventsService } from "./services/ionic-request-events.service";

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
    ],
    exports: [
        // export the component(s) that you want others to be able to use
    ]
})

export class IonicRequestEventsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicRequestEventsModule,
            providers: [
                IonicRequestEventsService
            ]
        };
    }
}