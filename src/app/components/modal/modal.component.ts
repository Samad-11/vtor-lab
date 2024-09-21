import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() showModal: boolean = false
  @Input() class: string = ""
  @Input() btnClass: string = ""
  @Input() btnText: string = "Open"
  @Output() closeModal = new EventEmitter<void>()


}
