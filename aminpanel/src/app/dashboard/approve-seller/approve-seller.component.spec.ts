import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSellerComponent } from './approve-seller.component';

describe('ApproveSellerComponent', () => {
  let component: ApproveSellerComponent;
  let fixture: ComponentFixture<ApproveSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
