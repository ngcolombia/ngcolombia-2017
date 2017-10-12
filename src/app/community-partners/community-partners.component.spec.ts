import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPartnersComponent } from './community-partners.component';

describe('CommunityPartnersComponent', () => {
  let component: CommunityPartnersComponent;
  let fixture: ComponentFixture<CommunityPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
