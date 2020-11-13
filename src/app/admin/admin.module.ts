import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OffersComponent } from './offers/offers.component';
import { TestamonialsComponent } from './testamonials/testamonials.component';
import { ClientsComponent } from './clients/clients.component';
import { ExpertsComponent } from './experts/experts.component';
import { MessagesComponent } from './messages/messages.component';
import { ResumeComponent } from './resume/resume.component';
import { NewsComponent } from './news/news.component';
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
    ],
  },
];
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
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class AdminModule {}
