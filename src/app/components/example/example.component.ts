import { Component, input } from '@angular/core';
import { Example } from '../../interfaces/example';
import { SentenceComponent } from '../sentence/sentence.component';

@Component({
  selector: 'app-example',
  imports: [SentenceComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  readonly examples = input.required<Example[]>();
}
