import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './component/team/team.component';
import { GraphQLModule } from './queries/graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { IndexComponent } from './component/index/index.component';
import { HttpHeaderInterceptor } from './interceptor/http-header.interceptor';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { PlayerService } from './service/player.service';
import { LayoutComponent } from './component/layout/layout.component';
import { SidebarRightComponent } from './component/layout/sidebar-right/sidebar-right.component';
import { PlayerComponent } from './component/player/player.component';
import { InsertPlayerTempComponent } from './component/insert-player-temp/insert-player-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    SidebarRightComponent,
    PlayerComponent,
    InsertPlayerTempComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true,
    },
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
