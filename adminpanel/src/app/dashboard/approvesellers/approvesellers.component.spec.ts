import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovesellersComponent } from './approvesellers.component';

describe('ApprovesellersComponent', () => {
  let component: ApprovesellersComponent;
  let fixture: ComponentFixture<ApprovesellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovesellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovesellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
