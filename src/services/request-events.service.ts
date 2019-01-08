import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RequestEventsService {

    public onEndRequest = new EventEmitter<any>();
    public onReadStorageSuccess = new EventEmitter<any>();
    public onReadStorageError = new EventEmitter<any>();
    public onStorageComplete = new EventEmitter<any>();
    public onStorageError = new EventEmitter<any>();

  /////////////////////////////////
 ////////// CONSTRUCTOR //////////
/////////////////////////////////

    /**
     *
     * @param storage
     */
    public constructor() {
    }

}