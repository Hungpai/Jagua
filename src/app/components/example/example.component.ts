import { Component, OnInit, Input } from '@angular/core';
import { Example } from '../../interfaces/example';
import { SentenceComponent } from '../sentence/sentence.component';

@Component({
  selector: 'app-example',
  imports: [SentenceComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @Input() examples: Example[] = [];

  // constructor(private exService: ExampleService) {
  //   this.examples = []
  // }

  // ngOnInit() {
  //   this.examples = this.exService.get();
  // }

}
