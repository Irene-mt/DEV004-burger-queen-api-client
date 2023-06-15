import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerModalComponent } from './add-worker-modal.component';

describe('AddWorkerModalComponent', () => {
  let component: AddWorkerModalComponent;
  let fixture: ComponentFixture<AddWorkerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkerModalComponent]
    });
    fixture = TestBed.createComponent(AddWorkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
