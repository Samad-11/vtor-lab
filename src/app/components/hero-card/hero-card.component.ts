import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  template: `
    <div [class]="'card card-compact bg-base-100 shadow-xl w-full h-80'"
    >
  <figure class="h-48 relative ">
    <img
    class="object-cover absolute"
      [src]="image"
      alt="Shoes" />
  </figure>
  <div class="card-body font-poppins
  ">
    <h3
    class="font-semibold "
    >
      {{ title }}
    </h3>
    <h6
    class="opacity-70"
    >
      {{description }}
    </h6>
  </div>
</div>
  `,
  styles: ``
})
export class HeroCardComponent {
  @Input() title = 'Hero Card';
  @Input() description = 'This is a hero card component';
  @Input() image = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp';

}
