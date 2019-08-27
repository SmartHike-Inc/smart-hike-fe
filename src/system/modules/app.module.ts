import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../routes/app-routing.module';
import { AppComponent } from '../../components/container/app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {StoreEnhancer} from 'redux';
import {environment} from '../../environments/environment';
import {IAppState} from '../interfaces/appState.interface';
import {INITIAL_STATE, reducerApp} from '../store/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngredux: NgRedux<IAppState>,
              private reduxDevTools: DevToolsExtension) {
    const enhancers: StoreEnhancer<IAppState>[] = (this.reduxDevTools.isEnabled() && !environment.production)
      ? [this.reduxDevTools.enhancer()] : [];

    ngredux.configureStore(reducerApp, INITIAL_STATE, [], enhancers);
  }
}
