import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WandConfettiComponent } from './wand-confetti.component';

describe('WandConfettiComponent', () => {
  let component: WandConfettiComponent;
  let fixture: ComponentFixture<WandConfettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WandConfettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WandConfettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
