import {Component, OnDestroy, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {DashboardInterface} from '../../system/state/interfaces/dashboard.interface';
import {LogoInterface} from '../../system/interfaces/logo.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sh-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  @select('dashboard') dashboard$: Observable<DashboardInterface>;
  @select('route') route$: Observable<string>;
  $dashboard$: Subscription;
  sidenav;
  _route;
  $route$: Subscription;
  logoData: LogoInterface = {
    size: 'xl',
    color: 'indigo',
    position: 'left'
  };

  constructor() {
    this.$dashboard$ = this.dashboard$.subscribe((data: DashboardInterface) => {
      this.sidenav = data && data.sidenav;
    });
  }

  ngOnInit() {
    this.$route$ = this.route$.subscribe((route) => {
      this._route = route.split('/');
      this._route = this._route.splice(-1)[0]; // get the last item of the array
      this._route = this._route.replace(/%20/g, ' ');
      console.log(this._route);
    });
  }

  ngOnDestroy() {
    this.$dashboard$.unsubscribe();
  }
}
