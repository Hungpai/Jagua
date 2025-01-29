import { VocabularyService } from './vocabulary.service';
import { HttpClient } from '@angular/common/http';
import { Vocabulary } from '../interfaces/vocabulary';
import { of } from 'rxjs';

describe('VocabularyService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let vocService: VocabularyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    vocService = new VocabularyService(httpClientSpy);
  });

  it('should return expected vocabularies (HttpClient called once)', (done: DoneFn) => {
    // Arrange
    const expectedVocs: Vocabulary[] = [
      {
        id: 1,
        lection: 1,
        type: 'VOCABULARY',
        kanji: [
          { kanji: { id: 101, kanji: '猫', kana: 'ねこ' }, position: 0 },
          { kanji: { id: 102, kanji: '犬', kana: 'いぬ' }, position: 1 },
        ],
        word_jp: '猫と犬',
        word_de: 'Katze und Hund',
      },
      {
        id: 2,
        lection: 1,
        type: 'VOCABULARY',
        kanji: [
          { kanji: { id: 103, kanji: '食べる', kana: 'たべる' }, position: 0 },
        ],
        word_jp: '食べる',
        word_de: 'essen',
      },
    ];

    // act
    httpClientSpy.get.and.returnValue(of(expectedVocs));

    // assert
    vocService.getVocabulary(1).subscribe({
      next: (vocs) => {
        expect(vocs).withContext('expected vocs').toEqual(expectedVocs);
        expect(vocs.length).withContext('expected vocs').toEqual(expectedVocs.length);
        expect(vocs[0].word_jp).withContext('expected word_jp').toEqual(expectedVocs[0].word_jp);
        expect(vocs[0].kanji.length).withContext('expected 2 kanjis').toEqual(expectedVocs[0].kanji.length);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an empty list', (done: DoneFn) => {
    // Arrange
    const empty = [] as Vocabulary[];

    // Act
    httpClientSpy.get.and.returnValue(of(empty));

    // Assert
    vocService.getVocabulary(100).subscribe({
      next: (vocs) => {
        expect(vocs).withContext('Is empty array').toEqual(empty);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  })
});