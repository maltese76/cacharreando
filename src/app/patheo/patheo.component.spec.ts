import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatheoComponent } from './patheo.component';

describe('PatheoComponent', () => {
  let component: PatheoComponent;
  let fixture: ComponentFixture<PatheoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatheoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatheoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
