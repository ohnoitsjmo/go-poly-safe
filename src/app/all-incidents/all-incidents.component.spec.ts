import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIncidentsComponent } from './all-incidents.component';

describe('AllIncidentsComponent', () => {
  let component: AllIncidentsComponent;
  let fixture: ComponentFixture<AllIncidentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIncidentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
