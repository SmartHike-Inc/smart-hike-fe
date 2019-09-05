import {ModuleWithProviders, NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {LogoComponent} from '../../components/logo/logo.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SideNavComponent} from '../../components/side-nav/side-nav.component';
import {NewBoardComponent} from '../../pages/dashboard/all-boards/modal/new-board.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTableComponent} from '../../components/data-table/data-table.component';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [
    LogoComponent,
    SideNavComponent,
    NewBoardComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DataTablesModule,
    LogoComponent,
    SideNavComponent,
    NewBoardComponent,
    DataTableComponent
  ],
  entryComponents: [NewBoardComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NgbActiveModal]
    };
  }
}
