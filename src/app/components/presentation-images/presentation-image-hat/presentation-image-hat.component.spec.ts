import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationImageHatComponent } from './presentation-image-hat.component';

describe('PresentationImageHatComponent', () => {
  let component: PresentationImageHatComponent;
  let fixture: ComponentFixture<PresentationImageHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PresentationImageHatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationImageHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
