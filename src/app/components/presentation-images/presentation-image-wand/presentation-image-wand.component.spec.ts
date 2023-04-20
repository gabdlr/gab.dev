import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationImageWandComponent } from './presentation-image-wand.component';

describe('PresentationImageWandComponent', () => {
  let component: PresentationImageWandComponent;
  let fixture: ComponentFixture<PresentationImageWandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PresentationImageWandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationImageWandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
