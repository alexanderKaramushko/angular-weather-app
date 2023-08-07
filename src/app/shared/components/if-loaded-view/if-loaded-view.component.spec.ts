import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfLoadedViewComponent } from './if-loaded-view.component';

describe('IfLoadedViewComponent', () => {
  let component: IfLoadedViewComponent;
  let fixture: ComponentFixture<IfLoadedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfLoadedViewComponent],
    });
    fixture = TestBed.createComponent(IfLoadedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
