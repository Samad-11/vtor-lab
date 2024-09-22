import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap'

@Component({
  selector: 'app-animated-text',
  standalone: true,
  imports: [],
  template: `
    <p class="text-nowrap">
      <span
      #changingText
      class="max-md:block"
      >Learn</span> with Us
    </p>
  `,
  styles: ``
})
export class AnimatedTextComponent implements AfterViewInit {
  @ViewChild('changingText') changingText!: ElementRef<HTMLSpanElement>
  words = ['Learn', 'Grow', 'Achieve']
  currentWordIndex = 0

  ngAfterViewInit(): void {
    this.animateText()
  }

  animateText() {
    const elm = this.changingText?.nativeElement
    // if (!elm) {
    //   console.log('no elm');

    //   return
    // }
    const tl = gsap.timeline({ repeat: -1 })
    this.words.forEach((word, indx) => {
      tl
        .to(elm, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            elm.textContent = word
          }
        })
        .to(elm, {
          opacity: 1,
          duration: .5
        })
        .to(elm, {
          delay: 1
        })
    })

  }
}
