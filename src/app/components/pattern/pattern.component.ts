import { Component, Input } from '@angular/core';
import { Vocabulary } from '../../interfaces/vocabulary';
import { SentenceComponent } from '../sentence/sentence.component';

@Component({
  selector: 'app-pattern',
  imports: [SentenceComponent],
  templateUrl: './pattern.component.html',
  styleUrl: './pattern.component.css'
})
export class PatternComponent {
  @Input() patterns: Vocabulary[] = [];
}
