import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { AuthModalComponent } from '../../components/auth-modal/auth-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, AuthModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'basic-comps';
}
