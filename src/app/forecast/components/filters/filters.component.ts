import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export type Filters = {
  latitude: number;
  longitude: number;
};

const coordinatePattern = /^\d\d\.\d\d\d$/;

@Component({
  selector: 'filters',
  styleUrls: ['./filters.component.css'],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {

  @Output()
  filtersChanged = new EventEmitter<Filters>();

  form: FormGroup;

  get latitude() {
    return +this.form.get('latitude').value;
  }

  get longitude() {
    return +this.form.get('longitude').value;
  }

  constructor() {
    this.form = new FormGroup({
      latitude: new FormControl('', [Validators.required, Validators.pattern(coordinatePattern)]),
      longitude: new FormControl('', [Validators.required, Validators.pattern(coordinatePattern)]),
    });
  }

  handleSubmit() {
    this.filtersChanged.emit({
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }

}
