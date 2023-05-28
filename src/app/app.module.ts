import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidenavComponent } from './appframe/sidenav/sidenav.component';
import { ToolbarComponent } from './appframe/toolbar/toolbar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, ToolbarComponent, SidenavComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
