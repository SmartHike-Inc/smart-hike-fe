import {Injectable} from '@angular/core';
import {Boards} from '../../static/dummy-db/boards';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../state/interfaces/appState.interface';
import {BOARDS} from '../state/actions/actions';

@Injectable()

export class BoardsService {
  boards: Boards;
  constructor(private _ngRedux: NgRedux<IAppState>) {
    this.boards = new Boards();
  }

  getBoards() {
    const allBoards = this.boards.getAll();
    this._ngRedux.dispatch({type: BOARDS.ADD, boards: allBoards});
  }

  addBoard(board) {
    const res = this.boards.addBoard(board);
    this._ngRedux.dispatch({type: BOARDS.UPDATE, boards: res});
  }

  updateBoards() {

  }
}
