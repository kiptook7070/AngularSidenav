import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './Pages/Navigation/sidenav/sidenav.component';
import { HeaderComponent } from './Pages/Navigation/header/header.component';
import { FooterComponent } from './Pages/Navigation/footer/footer.component';
import { DashboardComponent } from './Pages/Application/dashboard/dashboard.component';
import { SettingsComponent } from './Pages/Application/settings/settings.component';
import { StatisticsComponent } from './Pages/Application/statistics/statistics.component';
import { ProductsComponent } from './Pages/Application/products/products.component';
import { CouponsComponent } from './Pages/Application/coupons/coupons.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    StatisticsComponent,
    ProductsComponent,
    CouponsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
