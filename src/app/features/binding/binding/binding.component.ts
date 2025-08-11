import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
})
export class BindingComponent {
  username = 'Alice';
  photoUrl =
    'https://www.thedrive.com/wp-content/uploads/images-by-url-td/content/2021/09/IMG_2919-1.jpg?quality=85';
  clicks = 0;
  increment() {
    this.clicks++;
  }
}
