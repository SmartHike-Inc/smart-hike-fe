import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BoardsService} from '../../../../system/services/boards.service';

@Component({
  selector: 'sh-boards',
  templateUrl: './new-board.html'
})

export class NewBoardComponent {
  newBoardForm: FormGroup;

  constructor(private _modal: NgbActiveModal,
              private _fb: FormBuilder,
              private _boardService: BoardsService) {
    this.newBoardForm = this._fb.group({
      board_id: ['', Validators.required],
      board_name: ['']
    });
  }

  get board_id() {
    return this.newBoardForm.get('board_id');
  }

  get board_name() {
    return this.newBoardForm.get('board_name');
  }

  addBoard() {
    if (this.newBoardForm.valid) {
      const boardInfo = {
        id: this.board_id.value,
        name: this.board_name.value,
        ports: 3,
        status: 'inactive',
        date: (new Date()).getTime()
      };

      this._boardService.addBoard(boardInfo);
    }
  }

  closeModal() {
    this._modal.close();
  }
}
