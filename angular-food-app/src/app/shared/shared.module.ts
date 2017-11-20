import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BasicHighlightDirective} from "../directive/basic-highlight.directive";
import {UnlessDirective} from "../directive/unless.directive";
import {ShortenPipe} from "../pipe/shorten.pipe";

@NgModule({
  declarations: [
    BasicHighlightDirective,
    UnlessDirective,
    ShortenPipe
  ],
  exports: [
    CommonModule,
    BasicHighlightDirective,
    UnlessDirective,
    ShortenPipe
  ]
})
export class SharedModule { }
