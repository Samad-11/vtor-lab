import { Component } from '@angular/core';
import { BattleCarouselComponent } from '../../components/battle-carousel/battle-carousel.component';
import { UpcomingBattlesComponent } from '../../components/upcoming-battles/upcoming-battles.component';
import { WinnersComponent } from '../../components/winners/winners.component';

@Component({
  selector: 'app-battle',
  standalone: true,
  imports: [BattleCarouselComponent, UpcomingBattlesComponent, WinnersComponent],
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {

}
