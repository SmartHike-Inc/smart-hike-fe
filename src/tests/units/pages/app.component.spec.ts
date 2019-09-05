import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShComponent } from '../../../pages/sh.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ShComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'projectTemplate'`, () => {
    const fixture = TestBed.createComponent(ShComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('projectTemplate');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ShComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to projectTemplate!');
  });
});
