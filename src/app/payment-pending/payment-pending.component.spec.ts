import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPendingComponent } from './payment-pending.component';

describe('PaymentPendingComponent', () => {
  let component: PaymentPendingComponent;
  let fixture: ComponentFixture<PaymentPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
