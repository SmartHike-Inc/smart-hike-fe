import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Subject} from 'rxjs';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'sh-data-table',
  templateUrl: './data-table.html'
})
export class DataTableComponent implements AfterViewInit, OnChanges {
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {
    order: []
  };
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  @Input() table;
  @Output() changed = new EventEmitter();
  showTable = true;
  _dataDefaults = {
    thead: [],
    tbody: [],
  };

  constructor(private _cdr: ChangeDetectorRef) {
    this.table = {...this._dataDefaults, ...this.table};
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.table.previousValue) {
      this.changed.emit('changed');
    }

    //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     // Destroy the table first
    //     dtInstance.destroy();
    //     // Call the dtTrigger to rerender again
    //     this.dtTrigger.next();
    //   });
    console.log(changes);
  }
}
