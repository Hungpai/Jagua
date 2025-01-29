import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../../interfaces/vocabulary';
import { VocabularyService } from '../../services/vocabulary.service';
import { SentenceComponent } from '../sentence/sentence.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary',
  imports: [SentenceComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.css'
})
export class VocabularyComponent implements OnInit {
  vocabulary: Vocabulary[];
  index: number;
  curr_vocab: Vocabulary;
  jp_word: string;
  frontDiv: HTMLElement;
  progress: string;
  lection: number = 1;

  constructor(
    private vocabService: VocabularyService, 
    private activatedRoute: ActivatedRoute,
  ) {
    this.vocabulary = [];
    this.index = 0;
    this.curr_vocab = {} as Vocabulary;
    this.jp_word = "";
    this.frontDiv = {} as HTMLElement;
    this.progress = "";
    this.lection = this.activatedRoute.snapshot.params['lection']
  }

  ngOnInit(): void {
    this.getVocabulary();
  }

  getVocabulary(): void {
    this.vocabService.getVocabulary(this.lection)
      .subscribe(data => {
        if (data.length > 0) {
          this.vocabulary = data;
          this.curr_vocab = this.vocabulary[this.index];
          this.progress = "width:" + (this.index)/(this.vocabulary.length-1) +"%";
        }
      })
  }


  flipCard(): void {
    const card = document.getElementById('flipping-card');
    card!.classList.toggle('is-flipped');
  }

  moveCard(rotation: string, distance: string, step: number): void {
    if (
      (this.index == 0 && step==-1) || 
      (this.index == this.vocabulary.length-1 && step==1)
    ) {
      return;
    }

    const card = document.getElementById('flipping-card');

    if (card!.classList.contains('is-flipped')) {
      card!.classList.toggle('is-flipped');
    }

    card!.style.setProperty('--rotation', rotation);
    card!.style.setProperty('--distance', distance);
    card!.classList.add('next-card');

    card!.addEventListener('animationend', () => {
      card!.classList.remove('next-card');
    });

    this.index += step
    this.curr_vocab = this.vocabulary[this.index];
    this.progress = "width:" + ((this.index)/(this.vocabulary.length-1))*100 +"%";
  }
}
