import {AppComponent} from './app.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/page/home/home.component';
import {ProjectsComponent} from './component/page/projects/projects.component';
import {ActivitiesComponent} from './component/page/activities/activities.component';
import {DocumentsComponent} from './component/page/documents/documents.component';

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'documents', component: DocumentsComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
