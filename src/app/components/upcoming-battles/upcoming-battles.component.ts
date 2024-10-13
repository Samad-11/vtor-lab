import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-battles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-battles.component.html',
  styleUrl: './upcoming-battles.component.css'
})
export class UpcomingBattlesComponent {
  contests = [
    {
      name: "Algorithm Arena",
      desc: "Contest focused on algorithmic challenges, where participants solve problems that require optimized solutions using data structures and algorithms.",
      entry: 10,
      totalParticipants: 2203,
      date: "Nov 11, 2024"
    },
    {
      name: "Code Combat",
      desc: "An event where participants code in multiple languages to solve puzzles and real-world problems.",
      entry: 15,
      totalParticipants: 1894,
      date: "Dec 5, 2024"
    },
    {
      name: "Hackathon Hustle",
      desc: "A timed competition where teams collaborate to create innovative solutions, often in the form of software or applications.",
      entry: 25,
      totalParticipants: 3000,
      date: "Jan 18, 2025"
    },
    {
      name: "Bug Bounty Battle",
      desc: "Focuses on identifying security vulnerabilities in software applications, rewarding participants for finding and reporting bugs.",
      entry: 5,
      totalParticipants: 1023,
      date: "Feb 2, 2025"
    }
  ];

}
