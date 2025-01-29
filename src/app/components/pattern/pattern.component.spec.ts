import { ComponentFixture, TestBed } from "@angular/core/testing"
import { PatternComponent } from "./pattern.component";
import { VocabularyService } from "../../services/vocabulary.service";
import { Vocabulary } from "../../interfaces/vocabulary";
import { of } from "rxjs";

describe('Pattern Component', () => {
  let fixture: ComponentFixture<PatternComponent>;
  let component: PatternComponent;
  let mockData: Vocabulary[] = [
    {
      "id": 63,
      "lection": 1,
      "type": "PATTERN",
      "kanji": [],
      "word_jp": "わたしは マイク・ミラーです。",
      "word_de": "Ich heiße Mike Miller. (wörtl. Ich bin Mike Miller.)"
    },
    {
        "id": 64,
        "lection": 1,
        "type": "PATTERN",
        "kanji": [],
        "word_jp": "サントスさんは 学生じゃ ありません。",
        "word_de": "Herr Santos ist kein Student."
    },
  ]


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PatternComponent],
    })
  });
  
  it('should display patterns', () => {
    // arrange
    fixture = TestBed.createComponent(PatternComponent);
    component = fixture.componentInstance;
    component.patterns = mockData;
    
    // act
    fixture.detectChanges();
    
    // assert
    const listItems: HTMLElement[] = fixture.nativeElement.querySelectorAll('.d-flex');
    for (let i in mockData) {
      expect(listItems[i].children[0].textContent).toBe(mockData[i].word_de);
      expect(listItems[i].children[1].textContent).toContain(mockData[i].word_jp);
    }
  });
});