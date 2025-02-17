import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTrainerComponent } from './it-trainer.component';

describe('ItTrainerComponent', () => {
  let component: ItTrainerComponent;
  let fixture: ComponentFixture<ItTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTrainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
