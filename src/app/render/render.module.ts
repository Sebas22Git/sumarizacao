import { RenderService } from './render.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RenderComponent } from './render.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FileSelectDirective } from 'ng2-file-upload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    RenderComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SelectButtonModule,
    FileSelectDirective,
    RadioButtonModule,
    FormsModule,
  ],
  providers: [
    RenderService,
    HttpClient,
  ],
})
export class RenderModule { }
