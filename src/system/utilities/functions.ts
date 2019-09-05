import {AbstractControl} from '@angular/forms';
import {BoardInterface} from '../interfaces/board.interface';

export  function classes(control: AbstractControl) {
  return {
    'text-blue': control.valid,
    'text-red': control.invalid && (control.dirty || control.touched)
  };
}


export function updateArray(arr: any[], newItem: any)   {
  const oldItem = arr.filter((a) => {
    return a.id === newItem.id;
  })[0];
  if (newItem.constructor === Array) {
    return arr.concat(newItem);
  } else if (oldItem) {
    const index = arr.indexOf(oldItem);
    arr[index] = newItem;
    return arr;
  } else {
    arr.push(newItem);
    return arr;
  }
}

export function removeItem(arr: any[], item: any) {
  const removedItem = arr.filter((a) => {
    return a._id === item._id;
  })[0];
  const index = arr.indexOf(removedItem);
  arr.splice(index, 1);
  return arr;
}

export function setTableData(boards: BoardInterface[]) {
  const arr = [];
  boards.forEach((board, index) => {
    const dataObject: any = {
      row: index + 1,
      data: [
        board.id,
        board.name,
        board.ports,
        {
          type: 'button',
          content: board.status,
        },
        {
          type: 'date',
          date: board.date
        }
      ]
    };
    arr.push(dataObject);
  });
  return arr;
}
