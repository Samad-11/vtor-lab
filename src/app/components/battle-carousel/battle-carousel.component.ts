import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-battle-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './battle-carousel.component.html',
  styleUrl: './battle-carousel.component.css'
})
export class BattleCarouselComponent {
  contests = [
    {
      name: "Algorithm Arena",
      desc: "Contest focused on algorithmic challenges, where participants solve problems that require optimized solutions using data structures and algorithms.",
      entry: 10,
      totalParticipants: 2203
    },
    {
      name: "Code Combat",
      desc: "An event where participants code in multiple languages to solve puzzles and real-world problems.",
      entry: 15,
      totalParticipants: 1894
    },
    {
      name: "Hackathon Hustle",
      desc: "A timed competition where teams collaborate to create innovative solutions, often in the form of software or applications.",
      entry: 25,
      totalParticipants: 3000
    },
    {
      name: "Bug Bounty Battle",
      desc: "Focuses on identifying security vulnerabilities in software applications, rewarding participants for finding and reporting bugs.",
      entry: 5,
      totalParticipants: 1023
    }
  ];
  mainIndex = 0
  secondaryIndex = 1
  switchSlide(direction: number) {
    this.mainIndex = (this.mainIndex + direction + this.contests.length) % this.contests.length;
    this.secondaryIndex = (this.secondaryIndex + direction + this.contests.length) % this.contests.length;
  }
  //auto switch slide in every 5 seconds
  intervalId = setInterval(() => this.switchSlide(1), 5000);
  //clean up interval when component is destroyed
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
