import { Component, Input } from '@angular/core';
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
}
