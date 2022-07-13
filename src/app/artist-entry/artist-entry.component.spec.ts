import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEntryComponent } from './artist-entry.component';

describe('ArtistEntryComponent', () => {
  let component: ArtistEntryComponent;
  let fixture: ComponentFixture<ArtistEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
