import {AppComponent} from './app.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/page/home/home.component';
import {ProjectsComponent} from './component/page/projects/projects.component';
import {ActivitiesComponent} from './component/page/activities/activities.component';
import {DocumentsComponent} from './component/page/documents/documents.component';
import {ArticleComponent} from './component/page/article/article.component';
import {HomeResolver} from './resolver/home.resolver';

// TODO add page not found component
const appRoutes = [
    { path: '', component: HomeComponent, resolve: { response: HomeResolver } },
    { path: 'projects', component: ProjectsComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'projects/:id', component: ArticleComponent },
    { path: 'activities/:id', component: ArticleComponent },
    { path: '**', component: HomeComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
