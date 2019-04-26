import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyPartnersComponent } from './loyalty-partners.component';

describe('LoyaltyPartnersComponent', () => {
  let component: LoyaltyPartnersComponent;
  let fixture: ComponentFixture<LoyaltyPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
