import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationImageWandComponent } from './presentation-image-wand.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PresentationImageWandComponent', () => {
  let component: PresentationImageWandComponent;
  let fixture: ComponentFixture<PresentationImageWandComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationImageWandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationImageWandComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be displayed if device display is handset', () => {
    component.isHandset = true;
    fixture.detectChanges();
    const imageContainer = debugElement.query(
      By.css('.presentation-image-container')
    );
    expect(imageContainer).toBeNull();
  });

  it('should not be displayed if device display is tablet portrait', () => {
    component.isTabletPortrait = true;
    fixture.detectChanges();
    const imageContainer = debugElement.query(
      By.css('.presentation-image-container')
    );
    expect(imageContainer).toBeNull();
  });

  it('should be displayed if device display is not tablet portrait nor handset', () => {
    component.isTabletPortrait = false;
    component.isHandset = false;
    fixture.detectChanges();
    const imageContainer = debugElement.query(
      By.css('.presentation-image-container')
    );
    expect(imageContainer).toBeTruthy();
  });

  it('should display wand image', () => {
    component.isTabletPortrait = false;
    component.isHandset = false;
    fixture.detectChanges();
    const imageElement = debugElement
      .query(By.css('.presentation-image-container'))
      .query(By.css('img')).nativeElement as HTMLImageElement;
    expect(imageElement.src.slice(imageElement.src.search('assets'))).toBe(
      'assets/magic-wand.svg'
    );
  });
});
