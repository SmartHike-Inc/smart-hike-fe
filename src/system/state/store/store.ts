import {IAppState} from '../interfaces/appState.interface';
import {BOARDS, DASHBOARD, SELECTED_BOARD, SITE} from '../actions/actions';
import {setTableData, updateArray} from '../../utilities/functions';

export const INITIAL_STATE: IAppState = {
  route: '',
  dashboard: {
    sidenav: 'collapsed',
    boards: [],
    boardDataTable: {
      thead: ['Board Id', 'Board Name', 'Ports', 'Status', 'Added at'],
      tbody: []
    },
    selectedBoard: {
      name: '',
      id: ''
    }
  }
};

export function reducerApp(state, action) {
  let dashboard;
  let dtData;
  let tableBody;
  switch (action.type) {
    case SITE.CHANGE_ROUTE:
      return Object.assign({}, state, {
        route: action.route
      });
    case DASHBOARD.CHANGE_SIDENAV:
      dashboard = {...state.dashboard, ...{
          sidenav: action.sidenav
        }};
      return Object.assign({}, state, {dashboard});
    case BOARDS.ADD:
      tableBody = setTableData(action.boards);
      dtData = {...state.dashboard.boardDataTable, ...{tbody: tableBody}};
      dashboard = {...state.dashboard, ...{
          boards: action.boards,
          boardDataTable: dtData
        }};
      return Object.assign({}, state, {dashboard});
    case BOARDS.UPDATE:
      const updatedBoard = updateArray(state.dashboard.boards, action.boards);
      tableBody = setTableData(updatedBoard);
      dtData = {...state.dashboard.boardDataTable, ...{tbody: tableBody}};
      dashboard = {...state.dashboard, ...{
          boards: updatedBoard,
          boardDataTable: dtData
        }};
      return Object.assign({}, state, {dashboard});
    case SELECTED_BOARD.ADD:
      dashboard = {...state.dashboard, ...{
          selectedBoard: action.selectedBoard,
        }};
      return Object.assign({}, state, {dashboard});
  }
  return state;
}
