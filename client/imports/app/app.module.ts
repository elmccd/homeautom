import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoDataService } from './demo/demo-data.service';
import { DashboardComponent, SettingsComponent, BulbComponent } from './components';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    BulbComponent,
    DemoComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: DashboardComponent }
    ])
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
