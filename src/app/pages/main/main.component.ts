import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'main',
  styleUrls: ['./main.component.css'],
  templateUrl: './main.component.html',
})
export class MainComponent { }
