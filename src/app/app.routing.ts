import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './component/page/home/home.component';
import {ProjectsComponent} from './component/page/projects/projects.component';
import {ActivitiesComponent} from './component/page/activities/activities.component';
import {DocumentsComponent} from './component/page/documents/documents.component';
import {ArticleComponent} from './component/page/article/article.component';
import {HomeResolver} from './resolver/home.resolver';
import {ProjectsResolver} from './resolver/projects.resolver';
import {ActivitiesResolver} from './resolver/activities.resolver';
import {DocumentsResolver} from './resolver/documents.resolver';
import {ArticleResolver} from './resolver/article.resolver';

// TODO add page not found component
const appRoutes = [
    {path: '', component: HomeComponent, resolve: {response: HomeResolver}},
    {path: 'projects', component: ProjectsComponent, resolve: {response: ProjectsResolver}},
    {path: 'activities', component: ActivitiesComponent, resolve: {response: ActivitiesResolver}},
    {path: 'documents', component: DocumentsComponent, resolve: {response: DocumentsResolver}},
    {path: 'projects/:id', component: ArticleComponent, resolve: {response: ArticleResolver}},
    {path: 'activities/:id', component: ArticleComponent, resolve: {response: ArticleResolver}},
    {path: '**', component: HomeComponent, resolve: {response: HomeResolver}},
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
    urlUpdateStrategy: 'eager',
    onSameUrlNavigation: 'reload'
});
