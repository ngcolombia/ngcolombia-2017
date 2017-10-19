import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseformComponent } from './purchaseform.component';

describe('PurchaseformComponent', () => {
  let component: PurchaseformComponent;
  let fixture: ComponentFixture<PurchaseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
