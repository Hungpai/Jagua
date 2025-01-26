import { Component, Input } from '@angular/core';
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
  @Input() grammarItem: GrammarItem = {} as GrammarItem;

  dtype(example:Array<Vocabulary|Example|Dialogue>) {
    // if('title' in exhaustMap) return 'dialogue';

    // example = example as Array<Vocabulary|Example>
    // if(example.length == 0) return "empty";
    
    // if('word_jp' in example[0]) {
    //   return 'pattern';
    // } else {
    //   return 'example';
    // }

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