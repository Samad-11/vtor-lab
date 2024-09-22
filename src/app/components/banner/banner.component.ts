import { Component } from '@angular/core';
import { AnimatedTextComponent } from '../animated-text/animated-text.component';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [AnimatedTextComponent, HeroCardComponent, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  cards = [
    {
      title: 'Knowledge on trending domains in the market ',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card1.svg',
      class: "col-span-3"
    },
    {
      title: 'Domain Identification ',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card2.svg',
      class: "col-span-2"

    },
    {
      title: 'Live beginner course with experts',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card3.svg',
      class: "col-span-2"

    },
    {
      title: 'Discount Coupons',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card4.svg',
      class: "col-span-3"

    },
    {
      title: 'Knowledge on trending domains in the market ',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card1.svg',
      class: "col-span-3"

    },
    {
      title: 'Knowledge on trending domains in the market ',
      description: 'hi hi haas deni rinkiya ke papa, hi hi oye hoye,hi hi haas deni rinkiya ke papa, hi hi oye hoye,',
      image: '/card2.svg',
      class: "col-span-2"

    },

  ]
}
