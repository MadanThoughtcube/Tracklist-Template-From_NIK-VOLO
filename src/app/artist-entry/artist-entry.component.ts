import { Component, Input, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatDialogClose } from '@angular/material/dialog';




@Component({
  selector: 'app-artist-entry',
  templateUrl: './artist-entry.component.html',
  styleUrls: ['./artist-entry.component.css']
})
export class ArtistEntryComponent implements OnInit {
  color = 'primary';
  checked = false;

  changed(){
    if (this.checked === true){
      const spotify = document.getElementById("spotifyinput") as HTMLInputElement;
      spotify.style.display = "block";

      const soundcloud = document.getElementById("soundcloudinput") as HTMLInputElement;
      soundcloud.style.display = "block";

      const applemusic = document.getElementById("applemusicinput") as HTMLInputElement;
      applemusic.style.display = "block";

      const notification = document.getElementById("notifybox") as HTMLInputElement;
      notification.style.display = "none"

    }
    if (this.checked !== true){
      const spotify = document.getElementById("spotifyinput") as HTMLInputElement;
      spotify.style.display = "none";

      const soundcloud = document.getElementById("soundcloudinput") as HTMLInputElement;
      soundcloud.style.display = "none";

      const applemusic = document.getElementById("applemusicinput") as HTMLInputElement;
      applemusic.style.display = "none";

      const notification = document.getElementById("notifybox") as HTMLInputElement;
      notification.style.display = "block"


    }
    
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}


