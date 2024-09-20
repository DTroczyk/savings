import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './shared/angular-material.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeriodSelectorComponent } from './components/period-selector/period-selector.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TableComponent } from './components/table/table.component';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SummaryComponent,
    PeriodSelectorComponent,
    TableComponent,
    MainPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AngularMaterialModule],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: LOCALE_ID,
      useValue: 'pl',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'PLN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
