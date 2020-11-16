import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AccueilComponent } from './accueil/accueil.component'
import { ExpertsComponent } from './experts/experts.component'
import { SecondheaderComponent } from './secondheader/secondheader.component'
import { ServicesComponent } from './services/services.component'
import { AdminComponent } from './admin/admin.component'
import { AylanComponent } from './aylan/aylan.component'
import { AuthComponent } from './auth/auth.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr'
import { ContactComponent } from './contact/contact.component'
import { NewsComponent } from './news/news.component'
import { PdfViewerModule } from 'ng2-pdf-viewer'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ExpertsComponent,
    SecondheaderComponent,
    ServicesComponent,
    AylanComponent,
    AuthComponent,
    ContactComponent,
    NewsComponent,
    // T
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
