import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuInformationComponent } from './venu-information.component';

describe('VenuInformationComponent', () => {
  let component: VenuInformationComponent;
  let fixture: ComponentFixture<VenuInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
