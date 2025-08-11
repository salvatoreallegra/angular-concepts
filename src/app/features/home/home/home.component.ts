import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card.component';
// Update the path below to the correct location of highlight.directive
import { HighlightDirective } from '../../../features/directives/directives/highlight.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CardComponent, HighlightDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  appName = 'Angular Concepts';
}
