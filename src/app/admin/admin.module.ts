import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AdminComponent } from './admin.component'
import { Routes, RouterModule, Router } from '@angular/router'
import { CommonModule } from '@angular/common'
import { AdminheaderComponent } from './adminheader/adminheader.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { OffersComponent } from './offers/offers.component'
import { TestamonialsComponent } from './testamonials/testamonials.component'
import { ClientsComponent } from './clients/clients.component'
import { ExpertsComponent } from './experts/experts.component'
import { MessagesComponent } from './messages/messages.component'
import { ResumeComponent } from './resume/resume.component'
import { NewsComponent } from './news/news.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TestomanialComponent } from './testomanial/testomanial.component'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ServiceComponent } from './service/service.component'
import { QuillModule } from 'ngx-quill'
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: OffersComponent,
      },
      {
        path: 'testamonial',
        component: TestamonialsComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'services',
        component: ServiceComponent,
      },
      {
        path: 'experts',
        component: ExpertsComponent,
      },
      {
        path: 'resume',
        component: ResumeComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'testomanial',
        component: TestomanialComponent,
      },
    ],
  },
]
@NgModule({
  declarations: [
    AdminComponent,
    AdminheaderComponent,
    SidebarComponent,
    OffersComponent,
    TestamonialsComponent,
    ExpertsComponent,
    MessagesComponent,
    ResumeComponent,
    NewsComponent,
    ClientsComponent,
    TestomanialComponent,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    QuillModule,
  ],
  providers: [],
})
export class AdminModule {}
