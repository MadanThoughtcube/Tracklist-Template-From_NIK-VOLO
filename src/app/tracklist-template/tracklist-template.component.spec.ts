import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracklistTemplateComponent } from './tracklist-template.component';

describe('TracklistTemplateComponent', () => {
  let component: TracklistTemplateComponent;
  let fixture: ComponentFixture<TracklistTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracklistTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracklistTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
