import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentResponseComponent } from './payment-response.component';

describe('PaymentResponseComponent', () => {
  let component: PaymentResponseComponent;
  let fixture: ComponentFixture<PaymentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
