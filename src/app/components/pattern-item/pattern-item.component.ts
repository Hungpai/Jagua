import { Component, Input } from '@angular/core';
import { Vocabulary } from '../../interfaces/vocabulary';
import { SentenceComponent } from '../sentence/sentence.component';

@Component({
  selector: 'app-pattern-item',
  imports: [SentenceComponent],
  templateUrl: './pattern-item.component.html',
  styleUrl: './pattern-item.component.css'
})


export class PatternItemComponent {
  @Input() content: Vocabulary = {} as Vocabulary;
}


