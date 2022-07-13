import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongRowsComponent } from './song-rows/song-rows.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ArtistEntryComponent } from './artist-entry/artist-entry.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDialogClose } from '@angular/material/dialog';
import { InputFormComponent } from './input-form/input-form.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { LinksComponent } from './links/links.component';
import { PopuplinkComponent } from './popuplink/popuplink.component';
import { TracklistTemplateComponent } from './tracklist-template/tracklist-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SongRowsComponent,
    ArtistEntryComponent,
    InputFormComponent,
    BottomsheetComponent,
    LinksComponent,
    PopuplinkComponent,
    TracklistTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
