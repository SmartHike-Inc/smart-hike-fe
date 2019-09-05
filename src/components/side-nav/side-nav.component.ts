import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../system/state/interfaces/appState.interface';
import {DASHBOARD} from '../../system/state/actions/actions';

@Component({
  selector: 'sh-side-nav',
  templateUrl: './side-nav.html'
})
export class SideNavComponent {
  type = 'home';
  expanded = false;
  sideBarClasses = {
    'expanded': this.expanded,
    'collapsed': !this.expanded
  };
  constructor(private _ngRedux: NgRedux<IAppState>) {
  }

  toggle() {
    this.expanded = !this.expanded;
    this.sideBarClasses = {
      'expanded': this.expanded,
      'collapsed': !this.expanded
    };
    this._ngRedux.dispatch({type: DASHBOARD.CHANGE_SIDENAV, sidenav: this.expanded ? 'expanded' : 'collapsed'});
  }
}
