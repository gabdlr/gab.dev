import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSelectorComponent } from './language-selector.component';
import { DebugElement } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { By } from '@angular/platform-browser';
describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let el: DebugElement;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSelectorComponent, MatMenuModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show us flag when current language is en', () => {
    component.currentLang = 'en';
    fixture.detectChanges();
    const debugElement = el.nativeElement as HTMLElement;
    const flagImg = debugElement.querySelector('img') as HTMLImageElement;
    expect(flagImg.alt).toBe('us-flag');
  });

  it('should display spanish option when english is current', async () => {
    component.currentLang = 'en';
    let matMenu = await loader.getHarness(MatMenuHarness);
    await matMenu.open();
    const option = el.query(By.css('.mat-mdc-menu-item'));
    const optionImage: HTMLImageElement | null = (
      option.nativeElement as HTMLElement
    ).querySelector('img');
    expect(optionImage?.alt).toBe('spain-flag');
  });

  //prettier-ignore
  it("should have \'es\' as spanish menu option href", async () => {
    component.currentLang = 'en';
    let matMenu = await loader.getHarness(MatMenuHarness);
    await matMenu.open();
    const option = el.query(By.css('.mat-mdc-menu-item'));
    const optionHref = (option.nativeElement as HTMLLinkElement).href.slice(
      (option.nativeElement as HTMLLinkElement).href.lastIndexOf('/') + 1
    );
    expect(optionHref).toBe('es');
  });

  it('should show spanish flag when current language is es', () => {
    component.currentLang = 'es';
    fixture.detectChanges();
    const debugElement = el.nativeElement as HTMLElement;
    const flagImg = debugElement.querySelector('img') as HTMLImageElement;
    expect(flagImg.alt).toBe('spain-flag');
  });

  it('should display english option when spanish is current', async () => {
    component.currentLang = 'es';
    let matMenu = await loader.getHarness(MatMenuHarness);
    await matMenu.open();
    const option = el.query(By.css('.mat-mdc-menu-item'));
    const optionImage: HTMLImageElement | null = (
      option.nativeElement as HTMLElement
    ).querySelector('img');
    expect(optionImage?.alt).toBe('us-flag');
  });

  //prettier-ignore
  it("should have \'en\' as english menu option href", async () => {
    component.currentLang = 'es';
    let matMenu = await loader.getHarness(MatMenuHarness);
    await matMenu.open();
    const option = el.query(By.css('.mat-mdc-menu-item'));
    const optionHref = (option.nativeElement as HTMLLinkElement).href.slice(
      (option.nativeElement as HTMLLinkElement).href.lastIndexOf('/') + 1
    );
    expect(optionHref).toBe('en');
  });
});
