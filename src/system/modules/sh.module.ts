import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShRoutes } from '../routes/sh.routes';
import { ShComponent } from '../../pages/sh.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {StoreEnhancer} from 'redux';
import {environment} from '../../environments/environment';
import {IAppState} from '../state/interfaces/appState.interface';
import { INITIAL_STATE, reducerApp} from '../state/store/store';
import {SharedModule} from './shared.module';
import {ModalService} from '../services/modal.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BoardsService} from "../services/boards.service";

@NgModule({
  declarations: [
    ShComponent,
  ],
  imports: [
    BrowserModule,
    ShRoutes,
    NgReduxModule,
    SharedModule,
    NgbModalModule
  ],
  providers: [
    ModalService,
    BoardsService
  ],
  bootstrap: [ShComponent]
})
export class ShModule {
  constructor(private ngredux: NgRedux<IAppState>,
              private reduxDevTools: DevToolsExtension) {
    const enhancers: StoreEnhancer<IAppState>[] = (this.reduxDevTools.isEnabled() && !environment.production)
      ? [this.reduxDevTools.enhancer()] : [];

    ngredux.configureStore(reducerApp, INITIAL_STATE, [], enhancers);
  }
}
