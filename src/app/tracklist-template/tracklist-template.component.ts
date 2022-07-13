import { Component, OnInit } from '@angular/core';
import { Template } from 'src/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ArtistEntryComponent } from '../artist-entry/artist-entry.component';

@Component({
  selector: 'app-tracklist-template',
  templateUrl: './tracklist-template.component.html',
  styleUrls: ['./tracklist-template.component.scss']
})
export class TracklistTemplateComponent implements OnInit {
  template: Template = {
    playlist: "thank u, next",
    artist: "Ariana Grande",
    status: true,
  }

  constructor(private dialogRef : MatDialog) { }
  
  openArtistEntry(){
    this.dialogRef.open(ArtistEntryComponent, {
      width : '300px',
      height: '400px',
      hasBackdrop: true
  
    });
  }


  ngOnInit(): void {
  }


}
