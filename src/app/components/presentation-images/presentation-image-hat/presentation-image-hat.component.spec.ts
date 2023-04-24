import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationImageHatComponent } from './presentation-image-hat.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PresentationImageHatComponent', () => {
  let component: PresentationImageHatComponent;
  let fixture: ComponentFixture<PresentationImageHatComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationImageHatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationImageHatComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be displayed if device is not handset or tablet (portrait)', () => {
    component.isHandset = false;
    component.isTabletPortrait = false;
    fixture.detectChanges();
    const imageContainer = el.query(By.css('.presentation-image-container'));
    expect(imageContainer).toBeNull();
  });

  it('should display image container if device is handset', () => {
    component.isHandset = true;
    fixture.detectChanges();
    const imageContainer = el.query(By.css('.presentation-image-container'));
    expect(imageContainer).toBeTruthy();
  });

  it('should display image container if device is tablet (orientation portrait)', () => {
    component.isTabletPortrait = true;
    fixture.detectChanges();
    const imageContainer = el.query(By.css('.presentation-image-container'));
    expect(imageContainer).toBeTruthy();
  });

  it('should display image magic-hat.svg if handset or tablet portrait', () => {
    component.isHandset = false;
    component.isTabletPortrait = true;
    fixture.detectChanges();
    const imageElement = el
      .query(By.css('.presentation-image-container'))
      .query(By.css('img')).nativeElement as HTMLImageElement;
    expect(imageElement.src.slice(imageElement.src.search('assets'))).toBe(
      'assets/magic-hat.svg'
    );
    component.isHandset = true;
    component.isTabletPortrait = false;
    fixture.detectChanges();
    expect(imageElement.src.slice(imageElement.src.search('assets'))).toBe(
      'assets/magic-hat.svg'
    );
  });

  it('should display rat-image-container on click', () => {
    component.isHandset = true;
    fixture.detectChanges();
    (
      el.query(By.css('[data-test="magic-hat"]')).nativeElement as HTMLElement
    ).click();
    fixture.detectChanges();
    const ratImageContainer = el.queryAll(By.css('.rat-image-container'));
    expect(ratImageContainer).toBeTruthy();
  });

  it('should display rat-image after click', () => {
    component.isHandset = true;
    fixture.detectChanges();
    (
      el.query(By.css('[data-test="magic-hat"]')).nativeElement as HTMLElement
    ).click();
    fixture.detectChanges();
    const ratImage = el.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(ratImage.src.slice(ratImage.src.search('assets'))).toBe(
      'assets/rat.svg'
    );
  });
});
