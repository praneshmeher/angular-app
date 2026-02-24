import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { RendererDirectiveDirective } from './directives/renderer-directive/renderer-directive.directive'
import { ShortenPipePipe } from './pipes/shorten-pipe/shorten-pipe.pipe';
import { FilterPipePipe } from './pipes/filter-pipe/filter-pipe.pipe';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ChildComponent } from './components/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    RendererDirectiveDirective,
    ShortenPipePipe,
    FilterPipePipe,
    PlaygroundComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
