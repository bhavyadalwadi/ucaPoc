import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcaNavigationComponent } from './uca-navigation.component';

describe('UcaNavigationComponent', () => {
  let component: UcaNavigationComponent;
  let fixture: ComponentFixture<UcaNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcaNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcaNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
