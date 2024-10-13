import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winners.component.html',
  styleUrl: './winners.component.css'
})
export class WinnersComponent {
  winners = [
    { name: "Abdus Samad" },
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Alice Johnson" },
    { name: "Bob Brown" },
    { name: "Charlie Davis" },
    { name: "Emma Wilson" },
  ];


}
