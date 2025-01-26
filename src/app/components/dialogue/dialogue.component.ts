import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Dialogue } from '../../interfaces/dialogue';
import { SentenceComponent } from '../sentence/sentence.component';
import { OrderByPipePipe } from '../../order-by-pipe.pipe';

@Component({
  selector: 'app-dialogue',
  imports: [SentenceComponent, OrderByPipePipe],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent {
  @Input() dialogue: Dialogue = {} as Dialogue;

  // constructor(private diaService: DialogueService, private el: ElementRef) {
  //   this.dialogue = {} as Dialogue;
  // }

  // ngOnInit(): void {
  //   this.dialogue = this.diaService.get();
  //   // console.log(this.dialogue.dialogue[0][1].word_jp)
  //   // console.log(this.dialogue.dialogue[0][1].kanji)
  //   console.log(this.el.nativeElement);
  // }
}
