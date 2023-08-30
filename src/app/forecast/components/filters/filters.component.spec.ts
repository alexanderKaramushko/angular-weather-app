import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../../shared/shared.module';
import { Filters, FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  function findById(id: string) {
    return fixture.debugElement.query(By.css(`[data-testid="${id}"]`));
  }

  function setFieldValue(id: string, value: string) {
    const field = findById(id);

    field.nativeElement.value = value;
    field.nativeElement.dispatchEvent(new Event('input'));
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule, SharedModule, TranslateModule.forRoot()],
    });
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should bind inputs', () => {
    setFieldValue('latitude', '55.954');
    setFieldValue('longitude', '30.911');

    fixture.detectChanges();

    expect(component.form.controls.latitude.value).toBe('55.954');
    expect(component.form.controls.longitude.value).toBe('30.911');
  });

  it('should submit valid filters', () => {
    const submitSpy = spyOn(component, 'handleSubmit');

    setFieldValue('latitude', '55.954');
    setFieldValue('longitude', '30.911');

    fixture.detectChanges();

    findById('submit').nativeElement.click();

    expect(submitSpy).toHaveBeenCalledWith();
  });

  it('should block submitting invalid filters', () => {
    setFieldValue('latitude', '55.9');
    setFieldValue('longitude', '30.9');

    fixture.detectChanges();

    expect(findById('submit').nativeElement.disabled).toBe(true);
  });

  it('should emit filters on submit', () => {
    let filters: Filters | undefined;

    component.filtersChanged.subscribe((newFilters) => {
      filters = newFilters;
    });

    setFieldValue('latitude', '55.911');
    setFieldValue('longitude', '30.922');

    fixture.detectChanges();

    findById('submit').nativeElement.click();

    expect(filters).toEqual({
      latitude: 55.911,
      longitude: 30.922,
    });
  });
});
