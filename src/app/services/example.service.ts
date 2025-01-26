import { Injectable } from '@angular/core';
import { Example } from '../interfaces/example';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExampleService {
    private apiServeUrl = environment.apiBaseUrl;
      
    constructor(private http: HttpClient) {}
  
    public getExample(lection: number): Observable<Example[]> {
      return this.http.get<Example[]>(`${this.apiServeUrl}/lection/example/${lection}`);
    }
  // examples: Example[];

  // constructor() {
  //   this.examples = [
  //     {
  //       question: {
  //         word_jp: "[あなたは] マイク・ミラーさんですか。",
  //         word_de: "Sind Sie Herr (Mike) Miller?",
  //         kanji: []
  //       },
  //       answer: {
  //         word_jp: "...はい、[わたしは] マイク・ミラーです。",
  //         word_de: "...Ja, ich bin Mike Miller.",
  //         kanji: []
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "ミラーさんは 学生ですか。",
  //         word_de: "Sind Sie Student (Herr Miller)?",
  //         kanji: [["学", "がく"],["生", "せい"]]
  //       },
  //       answer: {
  //         word_jp: "...いいえ、 [わたしは] 学生じゃ ありません。",
  //         word_de: "...Nein, ich bin kein Student.",
  //         kanji: [["学", "がく"],["生", "せい"]]
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "ワンさんは 銀行員ですか。",
  //         word_de: "Ist Herr Wang Bankangestellter?",
  //         kanji: [["銀", "ぎん"],["行", "こう"],["員", "いん"]]
  //       },
  //       answer: {
  //         word_jp: "...いいえ、ワンさんは 銀行員じゃ ありません。医者です。",
  //         word_de: "...Nein, er ist kein Bankangestellter. Er is Arzt.",
  //         kanji: [["銀", "ぎん"],["行", "こう"],["員", "いん"],["医", "い"],["者", "しゃ"]]
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "あの　方は　どなたですか。",
  //         word_de: "Wer ist die Person dort drüben?",
  //         kanji: [["方", "かた"]]
  //       },
  //       answer: {
  //         word_jp: "...ワットさんです。　さくら大学の　先生です。",
  //         word_de: "...Das ist Herr Watt. Er ist Dozent an der Sakura-Universität.",
  //         kanji: [["大", "だい"],["学", "がく"],["先", "せん"],["生", "せい"]]
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "グプタさんは 会社員ですか。",
  //         word_de: "Ist Herr Gupta Angestellter?",
  //         kanji: [["会社員", "かいしゃいん"]]
  //       },
  //       answer: {
  //         word_jp: "...はい、会社員です。",
  //         word_de: "...Ja, er ist Angestellter",
  //         kanji: [["会社員", "かいしゃいん"]]
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "カリナさんも 会社員ですか。",
  //         word_de: "Ist Karina auch Angestelle?",
  //         kanji: [["会社員", "かいしゃいん"]]
  //       },
  //       answer: {
  //         word_jp: "...いいえ、カリナさんは 学生です。",
  //         word_de: "...Nein, sie ist Studentin.",
  //         kanji: [["学生", "がくせい"]]
  //       }
  //     },
  //     {
  //       question: {
  //         word_jp: "テレーザちゃんは 何歳ですか。",
  //         word_de: "Wie alt ist Teresa?",
  //         kanji: [["何歳", "なんさい"]]
  //       },
  //       answer: {
  //         word_jp: "...9歳です。",
  //         word_de: "...Sie ist 9 Jahre alt.",
  //         kanji: [["歳", "さい"]]
  //       }
  //     },
  //   ];
  //  }

  //  get() {
  //   return this.examples;
  //  }
}
