import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ExampleComponent } from "./example.component";
import { Example } from "../../interfaces/example";

describe('Example Component', () => {
  let fixture: ComponentFixture<ExampleComponent>;
  let component: ExampleComponent;
  let mockData: Example[] = [
    {
      "id": 1,
      "lection": 1,
      "question": {
          "id": 31,
          "lection": 1,
          "type": "EXAMPLE",
          "kanji": [],
          "word_jp": "[あなたは] マイク・ミラーさんですか。",
          "word_de": "Sind Sie Herr (Mike) Miller?"
      },
      "answer": {
          "id": 32,
          "lection": 1,
          "type": "EXAMPLE",
          "kanji": [],
          "word_jp": "...はい、[わたしは] マイク・ミラーです。",
          "word_de": "...Ja, ich bin Mike Miller."
      },
      "type": "EXAMPLE"
    },
    {
        "id": 2,
        "lection": 1,
        "question": {
            "id": 33,
            "lection": 1,
            "type": "EXAMPLE",
            "kanji": [],
            "word_jp": "ミラーさんは 学生ですか。",
            "word_de": "Sind Sie Student (Herr Miller)?"
        },
        "answer": {
            "id": 34,
            "lection": 1,
            "type": "EXAMPLE",
            "kanji": [],
            "word_jp": "...いいえ、 [わたしは] 学生じゃ ありません。",
            "word_de": "...Nein, ich bin kein Student."
        },
        "type": "EXAMPLE"
    },
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleComponent],
    })
  });
  
  it('should display examples', () => {
    // arrange
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    component.examples = mockData;
    
    // act
    fixture.detectChanges();
    
    // assert
    const listItems: HTMLElement[] = fixture.nativeElement.querySelectorAll('.examples');
    let i = 0;
    for (let li of listItems) {
      // question
      let question = li.children[0];
      expect(question.children[0].textContent).toBe(mockData[i].question.word_de); // translation
      expect(question.children[1].textContent).toContain(mockData[i].question.word_jp); // japanese 
      
      // answer
      let answer = li.children[1];
      expect(answer.children[0].textContent).toBe(mockData[i].answer.word_de); // translation
      expect(answer.children[1].textContent).toContain(mockData[i].answer.word_jp); // japanese 

      i++;
    }
  });
});