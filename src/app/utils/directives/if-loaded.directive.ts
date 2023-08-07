import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ifLoaded]',
})
export class IfLoadedDirective implements OnChanges {

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  @Input() ifLoaded?: boolean;

  @Input() ifLoadedLoader?: TemplateRef<unknown>;

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainerRef.clear();

    if (changes.ifLoaded.currentValue) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else if (this.ifLoadedLoader) {
      this.viewContainerRef.createEmbeddedView(this.ifLoadedLoader);
    }
  }

}
