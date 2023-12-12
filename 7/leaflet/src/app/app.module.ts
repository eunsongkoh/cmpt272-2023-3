import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * for full integration of leaflet,
 * npm i leaflet @types/leaflet
 * look in the package.json for leaflet: and @types/leaflet
 */
