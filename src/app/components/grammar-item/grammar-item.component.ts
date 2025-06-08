import { Component, input } from '@angular/core';
import { GrammarItem } from '../../interfaces/grammar';
import { Vocabulary } from '../../interfaces/vocabulary';
import { Dialogue } from '../../interfaces/dialogue';
import { Example } from '../../interfaces/example';
import { DialogueComponent} from '../dialogue/dialogue.component';
import { ExampleComponent } from "../example/example.component";
import { PatternComponent } from '../pattern/pattern.component';
import { exhaustMap } from 'rxjs';

@Component({
  selector: 'app-grammar-item',
  imports: [DialogueComponent, ExampleComponent, PatternComponent],
  templateUrl: './grammar-item.component.html',
  styleUrl: './grammar-item.component.css'
})
export class GrammarItemComponent {
  readonly grammarItem = input.required<GrammarItem>();

  dtype(example:Array<Vocabulary|Example|Dialogue>) {
    if (example.length == 0) return "empty";

    const item = example[0];
    if('word_jp' in item) {
      return 'pattern';
    } else if('question' in item) {
      return 'example';
    } else {
      return 'dialogue';
    }
  }

  castVocabulary(example:Array<Vocabulary|Example|Dialogue>) {
    return example as Array<Vocabulary>;
  }

  castExample(example:Array<Vocabulary|Example|Dialogue>) {
    return example as Array<Example>;
  }

  castDialogue(example:Array<Vocabulary|Example|Dialogue>) {
    return example[0] as Dialogue;
  }
}
