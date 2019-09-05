import {AfterViewInit, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BoardsService} from '../../../system/services/boards.service';
import {select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {Subject} from 'rxjs/internal/Subject';
import {BoardInterface} from '../../../system/interfaces/board.interface';
import {ModalService} from '../../../system/services/modal.service';
import {NewBoardComponent} from './modal/new-board.component';
import { DataTableDirective } from 'angular-datatables';
import {DataTableComponent} from "../../../components/data-table/data-table.component";

@Component({
  selector: 'sh-all-boards',
  templateUrl: './all-boards.html'
})

export class AllBoardsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('boardsTable') dtElement: ComponentRef<DataTableComponent>;
  @select(['dashboard', 'boards']) boards$: Observable<BoardInterface>;
  @select(['dashboard', 'boardDataTable']) dtData$: Observable<BoardInterface>;
  $dtData$: Subscription;
  $boards$: Subscription;
  boards;
  showTable = true;
  dtData = {
    thead: ['Board Id', 'Board Name', 'Ports', 'Status', 'Added at'],
    tbody: []
  };

    constructor(private _boardsService: BoardsService,
                private _modal: ModalService,
                private _cdr: ChangeDetectorRef) {
    }

  ngOnInit() {
    this.$dtData$ = this.dtData$.subscribe((data: any) => {
      this.dtData = data;
    });
    this.getBoards();
  }

  ngAfterViewInit(): void {
      this._cdr.detectChanges();
  }


  getBoards() {
      this._boardsService.getBoards();
  }

  newBoard() {
      this._modal.openModal(NewBoardComponent, {centered: true});
  }

  refresh(data) {
      if (data === 'changed') {
        this.showTable = false;
        setTimeout(() => {
          this.showTable = true;
        });
      }
  }

  ngOnDestroy() {
      this.$boards$.unsubscribe();
      this.$dtData$.unsubscribe();
  }
}
