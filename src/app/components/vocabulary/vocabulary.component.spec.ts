import { ComponentFixture, TestBed } from "@angular/core/testing"

import { VocabularyComponent } from "./vocabulary.component";
import { VocabularyService } from "../../services/vocabulary.service";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";


describe('Vocabulary Component', () => {
  let component: VocabularyComponent;
  let fixture: ComponentFixture<VocabularyComponent>;
  let vocabService: VocabularyService
  let cardFront: HTMLElement;
  let cardBack: HTMLElement;
  let progressCounter: HTMLElement;
  let progressBar: HTMLElement;
  let mockData = [
    {
      "id": 1,
      "lection": 1,
      "type": "VOCABULARY",
      "kanji": [],
      "word_jp": "わたし",
      "word_de": "ich"
    },
    {
      "id": 2,
      "lection": 1,
      "type": "VOCABULARY",
      "kanji": [],
      "word_jp": "あなた",
      "word_de": "Sie"
    },
    {
      "id": 3,
      "lection": 1,
      "type": "VOCABULARY",
      "kanji": [
          {
              "kanji": {
                  "id": 1,
                  "kanji": "人",
                  "kana": "ひと"
              },
              "position": 0
          }
      ],
      "word_jp": "あの人",
      "word_de": "er, sie, die Person dort drüben"
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyComponent],
      providers: [
        { provide: VocabularyService, useValue: { getVocabulary: () => of()}},
        { provide: ActivatedRoute, useValue: { snapshot: { params: { lection: 1 } } } }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyComponent);
    component = fixture.componentInstance;
    vocabService = TestBed.inject(VocabularyService);
    spyOn(vocabService, 'getVocabulary').and.returnValue(of(mockData));
    fixture.autoDetectChanges();

    cardFront = fixture.nativeElement.querySelector('.card-front');
    cardBack = fixture.nativeElement.querySelector('.card-back');
    progressCounter = fixture.nativeElement.querySelector('.progress-counter');
    progressBar = fixture.nativeElement.querySelector('.progress-bar.bg-danger');
  });

  it('should display first vocabulary with 0% progess and 1/3', () => {
    // assert
    expect(cardFront.textContent).toContain(mockData[0].word_jp);
    expect(progressCounter.textContent).toContain("1/3");
    expect(progressBar.getAttribute("style")).toContain("width: 0%");
  });

  it('should display next vocabulary with 50% progress and 2/3', () => {
    // arrange
    component.index = 0;

    // act
    const nextBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[1];
    nextBtn.click();
    
    // assert
    expect(cardFront.textContent).toContain(mockData[1].word_jp);
    expect(progressCounter.textContent).toContain("2/3");
    expect(progressBar.getAttribute("style")).toContain("width: 50%");
  });

  it('should display the previous card with 0% progress and 1/3', () => {
    // arrange
    component.index = 1;

    // act
    const prevBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[0];
    prevBtn.click();
    
    // assert
    expect(cardFront.textContent).toContain(mockData[0].word_jp);
    expect(progressCounter.textContent).toContain("1/3");
    expect(progressBar.getAttribute("style")).toContain("width: 0%");
  });


  it('should not go beyond the number of vocabularies', () => {
    // arrange
    component.index = 1;

    // act
    const nextBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[1];
    nextBtn.click();
    nextBtn.click();
    nextBtn.click();
    nextBtn.click();

    // assert
    expect(cardFront.textContent).toContain(mockData[2].word_jp);
    expect(progressCounter.textContent).toContain("3/3");
    expect(progressBar.getAttribute("style")).toContain("width: 100%");
  });

  it('should not go below zero', () => {
    // arrange 
    component.index = 0;

    // act
    const prevBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[0];
    prevBtn.click();
    prevBtn.click();

    // assert
    expect(cardFront.textContent).toContain(mockData[0].word_jp);
    expect(progressCounter.textContent).toContain("1/3");
    expect(progressBar.getAttribute("style")).toContain("width: 0%");
  });

  it('should flip the card and show the translation', () => {
    // act
    const flipCard: HTMLElement = fixture.nativeElement.querySelector('.flip-card');
    flipCard.click();

    // assert
    expect(flipCard.getAttribute("class")).toContain("is-flipped");
    expect(cardBack.textContent).toContain(mockData[0].word_de);
  });

  it('should flip the card and show the japanese word', () => {
    // act
    const flipCard: HTMLElement = fixture.nativeElement.querySelector('.flip-card');
    flipCard.click();
    flipCard.click();

    // assert
    expect(flipCard.getAttribute("class")).toBe("flip-card");
    expect(cardFront.textContent).toContain(mockData[0].word_jp);
  });

  it('should display japanese when pressing next and translation is currently showing', () => {
    // act
    const flipCard: HTMLElement = fixture.nativeElement.querySelector('.flip-card');
    const nextBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[1];
    flipCard.click();
    nextBtn.click();

    // assert
    expect(flipCard.getAttribute("class")).toBe("flip-card next-card");
    expect(cardFront.textContent).toContain(mockData[1].word_jp);
  });

  it('should display japanese when pressing prev and translation is currently showing', () => {
    // act
    component.index = 1;
    const flipCard: HTMLElement = fixture.nativeElement.querySelector('.flip-card');
    const prevBtn: HTMLElement = fixture.nativeElement.querySelectorAll('.flip-button')[0];
    flipCard.click();
    prevBtn.click();

    // assert
    expect(flipCard.getAttribute("class")).toContain('flip-card next-card');
    expect(cardFront.textContent).toContain(mockData[0].word_jp);
  });

  it('should be the content for lection 1', () => {
    const route = TestBed.inject(ActivatedRoute);
    expect(route.snapshot.params['lection']).toBe(1);
  });
});