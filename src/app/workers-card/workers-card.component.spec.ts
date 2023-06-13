import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersCardComponent } from './workers-card.component';

describe('WorkersCardComponent', () => {
  let component: WorkersCardComponent;
  let fixture: ComponentFixture<WorkersCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkersCardComponent]
    });
    fixture = TestBed.createComponent(WorkersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
