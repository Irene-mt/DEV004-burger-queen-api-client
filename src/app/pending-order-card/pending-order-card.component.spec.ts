import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrderCardComponent } from './pending-order-card.component';

describe('PendingOrderCardComponent', () => {
  let component: PendingOrderCardComponent;
  let fixture: ComponentFixture<PendingOrderCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingOrderCardComponent]
    });
    fixture = TestBed.createComponent(PendingOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
