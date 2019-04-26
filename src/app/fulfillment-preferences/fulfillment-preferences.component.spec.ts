import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillmentPreferencesComponent } from './fulfillment-preferences.component';

describe('FulfillmentPreferencesComponent', () => {
  let component: FulfillmentPreferencesComponent;
  let fixture: ComponentFixture<FulfillmentPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillmentPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillmentPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
