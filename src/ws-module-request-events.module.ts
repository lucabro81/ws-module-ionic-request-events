import { NgModule, ModuleWithProviders } from '@angular/core';
import { RequestEventsService } from "./services/request-events.service";

@NgModule({})

export class RequestEventsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RequestEventsModule,
            providers: [
                RequestEventsService
            ]
        };
    }
}