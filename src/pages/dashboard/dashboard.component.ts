import {Component, OnDestroy, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';
import {DashboardInterface} from '../../system/state/interfaces/dashboard.interface';
import {LogoInterface} from '../../system/interfaces/logo.interface';

@Component({
  selector: 'sh-dashboard',
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  @select('dashboard') dashboard$: Observable<DashboardInterface>;
  $dashboard$: Subscription;
  sidenav;
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
  }

  ngOnDestroy() {
    this.$dashboard$.unsubscribe();
  }
}
