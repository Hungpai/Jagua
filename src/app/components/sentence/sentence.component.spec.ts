import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SentenceComponent } from "./sentence.component";
import { KanjiPosition } from "../../interfaces/kanji";
import { Renderer2 } from "@angular/core";
import { find } from "rxjs";


describe('Sentence Component', () => {
  let component: SentenceComponent;
  let fixture: ComponentFixture<SentenceComponent>;
  let word_jp: string;
  let kanji: KanjiPosition[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SentenceComponent],
      providers: [Renderer2]
    });
    fixture = TestBed.createComponent(SentenceComponent);
    component = fixture.componentInstance;
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a simple japanese word', async () => {
    // arrange
    word_jp = "かいしゃいん";
    kanji = [];

    // act 
    component.word_jp = word_jp;
    component.kanji = kanji;
    component.ngOnChanges();
    fixture.detectChanges();

    // assert
    const span: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toBe(word_jp);
  });

  it('should display a single kanji with hiragana', () => {
    // arrange
    word_jp = "人";
    kanji = [{kanji: {id:0, kanji: "人", kana: "ひと"}, position: 0}];

    // act 
    component.word_jp = word_jp;
    component.kanji = kanji;
    component.ngOnChanges();
    fixture.detectChanges();

    // assert
    const ruby: HTMLElement = fixture.nativeElement.querySelector('ruby');
    const rb: HTMLElement = fixture.nativeElement.querySelector('rb');
    const rt: HTMLElement = fixture.nativeElement.querySelector('rt');
    expect(ruby).toBeTruthy();
    expect(rb.textContent).toBe(word_jp);
    expect(rt.textContent).toBe(kanji[0].kanji.kana);
  });

  it('should display a multiple kanji with hiragana', () => {
    // arrange
    word_jp = "...いいえ、ワンさんは 銀行員じゃ ありません。医者です。";
    kanji = [
      {kanji: {id:0, kanji: "銀行員", kana: "ぎんこういん"}, position: 0},
      {kanji: {id:1, kanji: "医者", kana: "いしゃ"}, position: 1},
    ];

    // act 
    component.word_jp = word_jp;
    component.kanji = kanji;
    component.ngOnChanges();
    fixture.detectChanges();

    // assert
    const span: HTMLElement[] = fixture.nativeElement.querySelectorAll('span');
    const ruby: HTMLElement[] = fixture.nativeElement.querySelectorAll('ruby');
    const rb: HTMLElement[] = fixture.nativeElement.querySelectorAll('rb');
    const rt: HTMLElement[] = fixture.nativeElement.querySelectorAll('rt');
    
    expect(span[0].textContent).toBe('...いいえ、ワンさんは ');
    expect(ruby[0].textContent).toBeTruthy();
    expect(rb[0].textContent).withContext('銀行員').toBe(kanji[0].kanji.kanji);
    expect(rt[0].textContent).withContext('ぎんこういん').toBe(kanji[0].kanji.kana);

    expect(span[1].textContent).toBe('じゃ ありません。');
    expect(ruby[1].textContent).toBeTruthy();
    expect(rb[1].textContent).withContext('医者').toBe(kanji[1].kanji.kanji);
    expect(rt[1].textContent).withContext('いしゃ').toBe(kanji[1].kanji.kana);

    expect(span[2].textContent).toBe('です。');
  });

  it('should add right padding for text spans that ends with a space', () => {
    // arrange
    word_jp = "...いいえ、ワンさんは 銀行員じゃ ありません。 医者です。";
    kanji = [
      {kanji: {id:0, kanji: "銀行員", kana: "ぎんこういん"}, position: 0},
      {kanji: {id:1, kanji: "医者", kana: "いしゃ"}, position: 1},
    ];

    // act 
    component.word_jp = word_jp;
    component.kanji = kanji;
    component.ngOnChanges();
    fixture.detectChanges();

    // assert
    const span: HTMLElement[] = fixture.nativeElement.querySelectorAll('span');
    expect(span[0].className).toBe("right-pad");
  });
});