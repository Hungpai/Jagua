import { Component, Input, OnInit } from '@angular/core';
import { PatternItemComponent } from '../pattern-item/pattern-item.component';
import { Vocabulary } from '../../interfaces/vocabulary';

@Component({
  selector: 'app-pattern',
  imports: [PatternItemComponent],
  templateUrl: './pattern.component.html',
  styleUrl: './pattern.component.css'
})
export class PatternComponent {
  @Input() patterns: Vocabulary[] = [];

  // constructor(private patternService: PatternService) {
  //   this.patterns = [];
  // }

  // ngOnInit(): void {
  //   this.patterns = this.patternService.get();
  // }

}
