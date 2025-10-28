import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoclifeComponent } from './soclife.component';

describe('SoclifeComponent', () => {
  let component: SoclifeComponent;
  let fixture: ComponentFixture<SoclifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoclifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoclifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
