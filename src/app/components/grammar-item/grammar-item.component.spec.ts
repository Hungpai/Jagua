import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GrammarItemComponent } from "./grammar-item.component";
import { GrammarItem } from "../../interfaces/grammar";
import { Dialogue } from "../../interfaces/dialogue";
import { DialogueComponent } from "../dialogue/dialogue.component";

describe('Grammar Item Component', () => {
  let component: GrammarItemComponent;
  let fixture: ComponentFixture<GrammarItemComponent>;
  let mockData: GrammarItem =  {
    "id": 1,
    "examples": [
        {
            "id": 49,
            "lection": 1,
            "type": "GRAMMAR",
            "kanji": [],
            "word_jp": "わたしは マイク・ミラーです。",
            "word_de": "Ich heiße Mike Miller. (wörtl. Ich bin Mike Miller.)"
        }
    ],
    "description": "Die Partikel は zeigt an, dass ...",
    "title": "Partikel は",
    "note": "Die Partikel は wird wie わ ausgesprochen."
  };

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [GrammarItemComponent]
    });
    fixture = TestBed.createComponent(GrammarItemComponent);
    component = fixture.componentInstance;
  });

  it('should display item title', () => {
    // arrange
    component.grammarItem = mockData;

    // act
    fixture.detectChanges();

    // assert
    const title = fixture.nativeElement.querySelector('p');
    expect(title.textContent).toBe(mockData.title);
  });

  it('should display item description', () => {
    // arrange
    component.grammarItem = mockData;

    // act
    fixture.detectChanges();

    // assert
    const desc = fixture.nativeElement.querySelector('.description');
    expect(desc.textContent).toBe(mockData.description);
  });

  it('should display note', () => {
    // arrange
    component.grammarItem = mockData;

    // act
    fixture.detectChanges();

    // assert
    const note = fixture.nativeElement.querySelector('.m-0.p-1');
    expect(note.textContent).toBe("[Anm.] " + mockData.note);
  });

  it('should call castVocabulary(/Pattern)', () => {
    // arrange
    spyOn(component, 'dtype').and.returnValue("pattern");;
    spyOn(component, 'castVocabulary');
    component.grammarItem = mockData;
    
    // act
    fixture.detectChanges();

    // assert
    expect(component.dtype).toHaveBeenCalled();
    expect(component.castVocabulary).toHaveBeenCalled();
  });

  it('should call castExample', () => {
    // arrange
    spyOn(component, 'dtype').and.returnValue("example");;
    spyOn(component, 'castExample');
    component.grammarItem = {
      "id": 5,
      "examples": [
          {
              "id": 8,
              "lection": 1,
              "question": {
                  "id": 52,
                  "lection": 1,
                  "type": "GRAMMAR",
                  "kanji": [
                      {
                          "kanji": {
                              "id": 3,
                              "kanji": "人",
                              "kana": "じん"
                          },
                          "position": 0
                      }
                  ],
                  "word_jp": "ミラーさんは アメリカ人ですか。",
                  "word_de": "Ist Herr Miller Amerikaner?"
              },
              "answer": {
                  "id": 53,
                  "lection": 1,
                  "type": "GRAMMAR",
                  "kanji": [
                      {
                          "kanji": {
                              "id": 3,
                              "kanji": "人",
                              "kana": "じん"
                          },
                          "position": 0
                      }
                  ],
                  "word_jp": "...はい、アメリカ人です。",
                  "word_de": "...Ja, er ist Amerikaner."
              },
              "type": "GRAMMAR"
          },
          {
              "id": 9,
              "lection": 1,
              "question": {
                  "id": 54,
                  "lection": 1,
                  "type": "GRAMMAR",
                  "kanji": [
                      {
                          "kanji": {
                              "id": 4,
                              "kanji": "先生",
                              "kana": "せんせい"
                          },
                          "position": 0
                      }
                  ],
                  "word_jp": "ミラーさんは 先生ですか。",
                  "word_de": "Ist Herr Miller Lehrer?"
              },
              "answer": {
                  "id": 55,
                  "lection": 1,
                  "type": "GRAMMAR",
                  "kanji": [
                      {
                          "kanji": {
                              "id": 4,
                              "kanji": "先生",
                              "kana": "せんせい"
                          },
                          "position": 0
                      }
                  ],
                  "word_jp": "...いいえ、先生じゃ ありません。",
                  "word_de": "...Nein, er ist kein Lehrer."
              },
              "type": "GRAMMAR"
          }
      ],
      "description": "Der Fragesatz wird durch Anfügung von か am Satzende gebildet, wobei die Wortstellung im Satz unverändert bliebt. Mit diesen Fragesatz fragt man, ob der Inhalt der Aussage richtig oder falsch ist. Die Antwort zu solchen Fragen beginnt man mit  はい, wenn der Inhalt der Aussage richtig ist, und mit いいえ, wenn er falsch ist.",
      "title": "Ja-Nein-Frage (Entscheidungsfrage)",
      "note": null
    };

    // act
    fixture.detectChanges();

    // assert
    expect(component.dtype).toHaveBeenCalled();
    expect(component.castExample).toHaveBeenCalled();
  });



  it('should not display any examples', () => {
    // arrange
    spyOn(component, 'dtype').and.returnValue("empty");;
    spyOn(component, 'castExample');
    component.grammarItem = {
      "id": 5,
      "examples": [],
      "description": "Der Fragesatz wird durch Anfügung...",
      "title": "Ja-Nein-Frage (Entscheidungsfrage)",
      "note": null
    };

    // act
    fixture.detectChanges();

    // assert
    expect(component.dtype).toHaveBeenCalled();
  });
});