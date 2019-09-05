import {NgModule} from '@angular/core';

import {SharedModule} from './shared.module';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {DashboardRoutes} from '../routes/dashboard.routes';
import {AllBoardsComponent} from '../../pages/dashboard/all-boards/all-boards.component';
import {SelectedBoardComponent} from '../../pages/dashboard/selected-board/selected-board.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AllBoardsComponent,
    SelectedBoardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutes,
  ],
  providers: [
  ]
})
export class DashboardModule {}


