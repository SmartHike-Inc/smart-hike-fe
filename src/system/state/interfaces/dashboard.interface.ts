import {BoardInterface} from '../../interfaces/board.interface';

export interface DashboardInterface {
  sidenav: string;
  boards: BoardInterface[];
  boardDataTable: any;
}
