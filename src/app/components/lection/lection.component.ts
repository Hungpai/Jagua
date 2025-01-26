import { Component, OnInit } from '@angular/core';
import { VocabularyComponent } from '../vocabulary/vocabulary.component';
import { PatternComponent } from '../pattern/pattern.component';
import { ExampleComponent } from "../example/example.component";
import { DialogueComponent } from '../dialogue/dialogue.component';
import { GrammarComponent } from '../grammar/grammar.component';
import { Vocabulary } from '../../interfaces/vocabulary';
import { Example } from '../../interfaces/example';
import { ExampleService } from '../../services/example.service';
import { Dialogue } from '../../interfaces/dialogue';
import { DialogueService } from '../../services/dialogue.service';
import { HttpErrorResponse } from '@angular/common/http';
import { VocabularyService } from '../../services/vocabulary.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lection',
  imports: [VocabularyComponent, PatternComponent, ExampleComponent, DialogueComponent, GrammarComponent ],
  templateUrl: './lection.component.html',
  styleUrl: './lection.component.css'
})
export class LectionComponent implements OnInit {
  pattern: Vocabulary[] = [];
  examples: Example[] = [];
  dialogue: Dialogue = {} as Dialogue;
  lection: number = 1;

  constructor(
    private vocabService: VocabularyService,
    private exService: ExampleService,
    private diaService: DialogueService,
    private activatedRoute:ActivatedRoute
  ) {
    this.lection = this.activatedRoute.snapshot.params['lection']
  }

  ngOnInit(): void {
    this.getPattern();
    this.getExample();
    this.getDialogue();
  }


  getPattern(): void {
    this.vocabService.getPattern(this.lection)
      .subscribe(data => this.pattern = data)
  }

  getExample(): void {
    this.exService.getExample(this.lection)
      .subscribe(data => this.examples = data)
  }

  getDialogue(): void {
    this.diaService.getDialogue(this.lection)
      .subscribe(data => this.dialogue = data)
  }
  
}
