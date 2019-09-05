import {BoardInterface} from '../../system/interfaces/board.interface';

export class Boards {
  boards: BoardInterface[] = [
    {
      id: 'aaa-pyc-nha',
      name: 'Living room Board',
      ports: 6,
      status: 'active',
      date: 1567345396187
    },
    {
      id: 'aea-pfh-48a',
      name: 'Kitchen Board',
      ports: 3,
      status: 'active',
      date: 1567345374634
    },
    {
      id: 'fka-pyc-49a',
      name: 'Toilet Board',
      ports: 1,
      status: 'active',
      date: 1567345363528
    },
    {
      id: 'afj-pyc-n46',
      name: 'Studio Board',
      ports: 6,
      status: 'inactive',
      date: 1567345309372
    }
  ];

  constructor() {
  }

  getAll(): BoardInterface[] {
    return this.boards;
  }

  addBoard(board): BoardInterface {
    this.boards.push(board);
    return board;
  }
}
