import {Component, Input} from '@angular/core';
import {LogoInterface} from '../../system/interfaces/logo.interface';

@Component({
  selector: 'sh-logo',
  templateUrl: './logo.html'
})
export class LogoComponent {
  @Input() data: LogoInterface;

  _dataDefaults: LogoInterface = {
    size: 'md',
    color: 'white',
    position: 'left'
  };

  constructor() {
    this.data = {...this._dataDefaults, ...this.data};
  }
}
