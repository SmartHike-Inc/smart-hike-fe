import {AfterViewInit, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BoardsService} from '../../../system/services/boards.service';
import {NgRedux, select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {BoardInterface} from '../../../system/interfaces/board.interface';
import {ModalService} from '../../../system/services/modal.service';
import {NewBoardComponent} from './modal/new-board.component';
import {DataTableComponent} from '../../../components/data-table/data-table.component';
import {Router} from '@angular/router';
import {IAppState} from '../../../system/state/interfaces/appState.interface';
import {SELECTED_BOARD} from '../../../system/state/actions/actions';

@Component({
  selector: 'sh-all-boards',
  templateUrl: './all-boards.html'
})

export class AllBoardsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('boardsTable') dtElement: ComponentRef<DataTableComponent>;
  @select(['dashboard', 'boards']) boards$: Observable<BoardInterface>;
  @select(['dashboard', 'boardDataTable']) dtData$: Observable<BoardInterface>;
  $dtData$: Subscription;
  boards;
  showTable = true;
  dtData = {
    thead: ['Board Id', 'Board Name', 'Ports', 'Status', 'Added at'],
    tbody: []
  };

    constructor(private _boardsService: BoardsService,
                private _modal: ModalService,
                private _cdr: ChangeDetectorRef,
                private _router: Router,
                private _ngRedux: NgRedux<IAppState>) {
    }

  ngOnInit() {
    this.$dtData$ = this.dtData$.subscribe((data: any) => {
      this.dtData = {...data, ...{rowClick: this.selectBoard}};
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

  selectBoard = (event, boardKey) => {
      const _board = this.dtData.tbody.find((board) => board.row === boardKey);
      const affix = _board.data[1] ? _board.data[1] : _board.data[0];
      this._ngRedux.dispatch({type: SELECTED_BOARD.ADD, selectedBoard: _board});
      this._router.navigate(['/dashboard', `${affix}`]);
  }

  ngOnDestroy() {
      this.$dtData$.unsubscribe();
  }
}
