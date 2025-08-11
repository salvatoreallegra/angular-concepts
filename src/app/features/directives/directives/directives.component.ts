import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
  show = true;
  items = ['One', 'Two', 'Three'];
  role: 'admin' | 'user' = 'user';
  danger = false;
  toggle() {
    this.show = !this.show;
  }
  flipDanger() {
    this.danger = !this.danger;
  }
}
