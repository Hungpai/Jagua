import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DialogueComponent } from "./dialogue.component"

import { Dialogue } from "../../interfaces/dialogue";



describe('Dialogue Component', () => {
  let fixture: ComponentFixture<DialogueComponent>;
  let component: DialogueComponent;
  let mockData: Dialogue = {
    "id": 1,
    "lection": 1,
    "dialogue": [
        {
            "id": 1,
            "content": {
                "id": 45,
                "lection": 1,
                "type": "DIALOGUE",
                "kanji": [],
                "word_jp": "おはよう ございます",
                "word_de": "Guten Morgen!"
            },
            "name": "Satō"
        },
        {
            "id": 2,
            "content": {
                "id": 46,
                "lection": 1,
                "type": "DIALOGUE",
                "kanji": [],
                "word_jp": "おはよう ございます。\\n佐藤さん、こちらは マイク・ミラーさんです。",
                "word_de": "Guten Morgen!\\nFrau Satō, das hier ist Mike Miller."
            },
            "name": "Yamato"
        },  
    ],
    "type": "DIALOGUE",
    "title": "Darf ich mich vorstellen"
};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogueComponent]
    });

    fixture = TestBed.createComponent(DialogueComponent);
    component = fixture.componentInstance;
    component.dialogue = mockData;
    fixture.detectChanges();
  });

  it('should display title', () => {
    // title
    const title: HTMLElement = fixture.nativeElement.querySelector('h4');
    expect(title.textContent).toBe(mockData.title);

    // dialogue
    const dialogue: HTMLElement[] = fixture.nativeElement.querySelectorAll('tr');
    dialogue.forEach((item, i)  => {
      let td = item.children;
      expect(td[0].textContent).toBe(mockData
        .dialogue[i]
        .name + ":");
      expect(td[1].textContent).toBe(mockData
        .dialogue[i]
        .content
        .word_de
        .replaceAll("\\n", "\n")
        .trim()
      );
      expect(td[2].textContent).toBe(mockData
        .dialogue[i]
        .content
        .word_jp
        .replaceAll('\\n', '\n')
        .trim()
      );
    });
  });
});