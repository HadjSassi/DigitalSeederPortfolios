import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLifeComponent } from './social-life.component';

describe('SocialLifeComponent', () => {
  let component: SocialLifeComponent;
  let fixture: ComponentFixture<SocialLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
