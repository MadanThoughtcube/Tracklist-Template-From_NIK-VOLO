import { Component, OnInit } from '@angular/core';
import { Template } from 'src/input';

@Component({
  selector: 'app-tracklist-template',
  templateUrl: './tracklist-template.component.html',
  styleUrls: ['./tracklist-template.component.scss']
})
export class TracklistTemplateComponent implements OnInit {
  template: Template = {
    playlist: "Name of Album/Mix",
    artist: "Artist",
    status: true,
  }

  constructor() { }


  ngOnInit(): void {
  }


}
