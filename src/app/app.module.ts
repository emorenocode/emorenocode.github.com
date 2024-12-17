import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ImagePipe } from './pipes/image.pipe';
import { StackComponent } from './components/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SocialNetworkComponent,
    PortfolioComponent,
    ImagePipe,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
