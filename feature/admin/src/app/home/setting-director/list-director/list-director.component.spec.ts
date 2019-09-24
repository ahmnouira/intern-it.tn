import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDirectorComponent } from './list-director.component';

describe('ListDirectorComponent', () => {
  let component: ListDirectorComponent;
  let fixture: ComponentFixture<ListDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
