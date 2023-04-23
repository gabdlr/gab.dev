import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlsBarComponent } from './controls-bar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
describe('ControlsBarComponent', () => {
  let component: ControlsBarComponent;
  let fixture: ComponentFixture<ControlsBarComponent>;
  let el: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlsBarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ControlsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain language selector component', () => {
    el = fixture.debugElement.query(By.directive(LanguageSelectorComponent));
    expect(el).toBeTruthy();
  });
});
