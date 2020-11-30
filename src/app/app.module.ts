import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingProviders, Routing} from './app.routing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HeaderComponent} from './component/section/header/header.component';
import {HomeComponent} from './component/page/home/home.component';
import {ProjectsComponent} from './component/page/projects/projects.component';
import {ActivitiesComponent} from './component/page/activities/activities.component';
import {DocumentsComponent} from './component/page/documents/documents.component';
import {SocialNetworksComponent} from './component/section/social-networks/social-networks.component';
import {ResponsiveSectionComponent} from './component/section/responsive-section/responsive-section.component';
import {FooterComponent} from './component/section/footer/footer.component';
import {ExperienceComponent} from './component/section/experience/experience.component';
import {SkillsComponent} from './component/section/skills/skills.component';
import { LocalizedDatePipe } from './pipe/localized-date.pipe';

import localeEs from '@angular/common/locales/es';
import {CommonModule, registerLocaleData} from '@angular/common';
import { ArticleListItemComponent } from './component/section/article-list-item/article-list-item.component';
import { ArticleComponent } from './component/page/article/article.component';
import { BadgeListComponent } from './component/section/badge-list/badge-list.component';
import { ArticleExternalLinksComponent } from './component/section/article-external-links/article-external-links.component';
import { ProfileComponent } from './component/section/profile/profile.component';
import { AboutMeComponent } from './component/section/about-me/about-me.component';
import { HomeConclusionComponent } from './component/section/home-conclusion/home-conclusion.component';
registerLocaleData(localeEs);

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ProjectsComponent,
        ActivitiesComponent,
        DocumentsComponent,
        SocialNetworksComponent,
        ResponsiveSectionComponent,
        FooterComponent,
        ExperienceComponent,
        SkillsComponent,
        LocalizedDatePipe,
        ArticleListItemComponent,
        ArticleComponent,
        BadgeListComponent,
        ArticleExternalLinksComponent,
        ProfileComponent,
        AboutMeComponent,
        HomeConclusionComponent
    ],
    imports: [
        Routing,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    exports: [TranslateModule],
    providers: [AppRoutingProviders, { provide: LOCALE_ID, useValue: 'es'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
