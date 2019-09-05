import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AllBoardsComponent} from '../../pages/dashboard/all-boards/all-boards.component';
import {SelectedBoardComponent} from '../../pages/dashboard/selected-board/selected-board.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: AllBoardsComponent
      },
      {
        path: ':board_name',
        component: SelectedBoardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule]
})

export class DashboardRoutes { }
