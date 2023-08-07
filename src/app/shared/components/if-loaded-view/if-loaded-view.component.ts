import { Component, Input } from '@angular/core';

@Component({
  selector: 'if-loaded-view',
  styleUrls: ['./if-loaded-view.component.css'],
  templateUrl: './if-loaded-view.component.html',
})
export class IfLoadedViewComponent {

  @Input() isLoading = false;

}
