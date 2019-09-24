import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRecentComponent } from './find-recent.component';

describe('FindRecentComponent', () => {
  let component: FindRecentComponent;
  let fixture: ComponentFixture<FindRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
