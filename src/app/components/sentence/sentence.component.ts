import { Component, Renderer2, ElementRef, Input } from '@angular/core';
import { KanjiPosition } from '../../interfaces/kanji';

@Component({
  selector: 'app-sentence',
  imports: [],
  templateUrl: './sentence.component.html',
  styleUrl: './sentence.component.css'
})
export class SentenceComponent {
  @Input() word_jp: string = "";
  @Input() kanji: KanjiPosition[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.innerHTML = ''
    this.createWordDisplay(this.word_jp, this.kanji, this.el.nativeElement);
  }

  createWordDisplay(word_jp:string, kanjiPosition: KanjiPosition[], container: HTMLElement) {
    const wrapper = this.renderer.createElement('div');

    let i = 0;
    for(const kp of kanjiPosition) {
      let k = kp.kanji;
      let singleKanji = k.kanji;
      let kana = k.kana;
      let kanji_index = word_jp.indexOf(singleKanji, i);
      
      // text before the kanji
      if (kanji_index > i) {
        let paragraph = this.renderer.createElement('span');
        let subString = word_jp.substring(i,kanji_index);
        let preText = this.renderer.createText(subString);
        this.renderer.appendChild(paragraph, preText);
        this.renderer.appendChild(wrapper, paragraph);
        this.addPadding(paragraph, subString);
      }

      // kanji
      const kanjiDisplay = this.createKanjiDisplay(singleKanji, kana);
      this.renderer.appendChild(wrapper, kanjiDisplay);

      i = kanji_index + singleKanji.length;
    }

    // end of sentence
    if(i < word_jp.length) {
      let paragraphEnd = this.renderer.createElement('span');
      let subStringEnd = word_jp.substring(i, word_jp.length);
      let endText = this.renderer.createText(subStringEnd);
      this.renderer.appendChild(paragraphEnd, endText);
      this.renderer.appendChild(wrapper, paragraphEnd);
      this.addPadding(paragraphEnd, subStringEnd);
    }

    this.renderer.appendChild(container, wrapper);
  }

  createKanjiDisplay(kanji: string, kana: string) {
    // create elements
    const ruby = this.renderer.createElement('ruby');
    const rb = this.renderer.createElement('rb');
    const rt = this.renderer.createElement('rt');
    const rbText = this.renderer.createText(kanji);
    const rtText = this.renderer.createText(kana);

    // add text
    this.renderer.appendChild(rb, rbText);
    this.renderer.appendChild(rt, rtText);

    // add to ruby
    this.renderer.appendChild(ruby, rb);
    this.renderer.appendChild(ruby, rt);
    return ruby;
  }

  addPadding(paragraph: any, text: string) {
    if(text[text.length-1] == ' ') {
      this.renderer.addClass(paragraph, 'right-pad');
    }
    
    if(text[0] == ' ') {
      this.renderer.addClass(paragraph, 'left-pad');
    }
  }
}
