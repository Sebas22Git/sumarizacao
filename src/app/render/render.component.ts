import { Component, ViewEncapsulation } from '@angular/core';
import { RenderService } from './render.service';


@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RenderComponent {

  constructor(private _renderService: RenderService) {
    _renderService.summarization({text: "Lauro Milagres Oliveira", language: "portuguese"});
  }

}
