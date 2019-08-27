import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../system/interfaces/appState.interface';
import {CHANGE_ROUTE} from '../../system/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: '../../system/templates/container/app.html'
})
export class AppComponent implements OnInit {
  title = 'SmartHike';

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.setRoute();
  }

  setRoute() {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.ngRedux.dispatch({
          type: CHANGE_ROUTE,
          route: data.urlAfterRedirects
        });
      }
    });
  }
}
