import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidenavComponent } from './appframe/sidenav/sidenav.component';
import { ToolbarComponent } from './appframe/toolbar/toolbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslationPipe } from './pipes/translation.pipe';

@NgModule({
  declarations: [AppComponent, TranslationPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarComponent,
    SidenavComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
