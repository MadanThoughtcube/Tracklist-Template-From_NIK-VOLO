import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Song } from 'src/songs';
import { SONGS } from 'src/mock-songs';
import { PopuplinkComponent } from '../popuplink/popuplink.component';
import { InputFormComponent } from '../input-form/input-form.component';



@Component({
  selector: 'app-song-rows',
  templateUrl: './song-rows.component.html',
  styleUrls: ['./song-rows.component.css']
})


export class SongRowsComponent implements OnInit {
  songs=SONGS;

  


  constructor(private dialogRef: MatDialog) { }
  openDialog(){
    this.dialogRef.open(InputFormComponent);
  }

  openDialogLinks(){
    this.dialogRef.open(PopuplinkComponent, {
      width: '250px',
      height: '250px'
    })
  }
  


  ngOnInit(): void {
  }

}
