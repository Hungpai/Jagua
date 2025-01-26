import { Injectable } from '@angular/core';
import { Grammar } from '../interfaces/grammar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {
  private apiServeUrl = environment.apiBaseUrl;
    
  constructor(private http: HttpClient) {}

  public getGrammar(lection: number): Observable<Grammar[]> {
    return this.http.get<Grammar[]>(`${this.apiServeUrl}/lection/grammar/${lection}`);
  }
  // grammar: Grammar[];

  // constructor() {
  //   this.grammar = [
  //     {
  //       header: "N₁ は N₂ です",
  //       description: null,
  //       grammarItems: [{
  //         title: "Partikel は",
  //         description: "Die Partikel は zeigt an, dass das davostehende (N₁ ) das Thema des Satzes ist. Man kann auf dise Weise einen Satz bilden, in dem man an das hema, worüber man sprehcen möchte, ein は anfügt und verschiedene Erklärungen dazu abgibt.",
  //         examples: [{
  //           word_jp: "わたしは マイク・ミラーです。",
  //           word_de: "Ich heiße Mike Miller. (wörtl. Ich bin Mike Miller.)",
  //           kanji: [],
  //         }],
  //         note: "Die Partikel は wird wie わ ausgesprochen."
  //       },
  //       {
  //         title: "です",
  //         description: "Nomina in Verbindung mit です werden zu Prädikaten. です drückt eine Berurteilung oder Behauptung und gleichzeitig eine höfliche Einstellung gegenüber dem Hörer aus. Es flektiert be Verneinung und Vergangenheit.",
  //         examples: [{
  //           word_jp: "わたしは 会社員です。",
  //           word_de: "Ich bin Firmenangestellte/-r.",
  //           kanji: [["会社員", "かいしゃいん"]]
  //         }],
  //         note: null
  //       }
  //       ]
  //     },
  //     {
  //       header: "N₁ は N₂ じゃ (では) ありません",
  //       description: null,
  //       grammarItems: [{
  //         title: null,
  //         description: "じゃ（では）ありません ist die verneinte Form von です. In der Umgangssprache wird じゃ ありません häufig benutzt. In Reden, bei offiziellen Anlässen oder in der Schriftsprache wird では ありません verwendet.",
  //         examples: [{
  //           word_jp: "サントスさんは 学生じゃ(では) ありません。",
  //           word_de: "Herr Santos ist kein Student.",
  //           kanji: [["学生", "がくせい"]],
  //         }],
  //         note: "は in では wird wie は ausgesprochen."
  //       }]
  //     },
  //     {
  //       header: "N₁ は N₂ ですか",
  //       description: null,
  //       grammarItems: [
  //         {
  //           title: "Partikel か",
  //           description: "Die Partikel か drückt Unsicherheit, Zweifel u.Ä. des Sprechens aus. Um einen Fragesatz zu bilden, wird か an das Satzende angeschlossen. Fragesätze haben normalerweise am Satzende eine steigende Intonation.",
  //           examples: [],
  //           note: null
  //         },
  //         {
  //           title: "Ja-Nein-Frage (Entscheidungsfrage)",
  //           description: "Der Fragesatz wird durch Anfügung von か am Satzende gebildet, wobei die Wortstellung im Satz unverändert bliebt. Mitdiesen Fragesatz fragt man, ob der Inhalt der Aussage richtig oder falsch ist. Die Antwort zu solchen Fragen beginnt man mit  はい, wenn der Inhalt der Aussage richtig ist, und mit いいえ, wenn er falsch ist.",
  //           examples: [
  //             {
  //               question: { word_jp: "ミラーさんは アメリカ人ですか。", word_de: "Ist Herr Miller Amerikaner?", kanji: [["人", "じん"]] },
  //               answer: { word_jp: "...はい、アメリカ人です。", word_de: "...Ja, er ist Amerikaner.", kanji: [] }
  //             },
  //             {
  //               question: { word_jp: "ミラーさんは 先生ですか。", word_de: "Ist Herr Miller Lehrer?", kanji: [["先生", "せんせい"]] },
  //               answer: { word_jp: "...いいえ、先生じゃ ありません。", word_de: "...Nein, er ist kein Lehrer.", kanji: [["先生", "せんせい"]] }
  //             }
  //           ],
  //           note: null,
  //         },
  //         {
  //           title: "W-Frage (Ergänzungfrage)",
  //           description: "Der Teil des Satzes, anch dem man fragen möchte, wird durch ein Fragewort ersetzt und か am Satzende angefügt. Die Wortstellung bleibt unverändert.",
  //           examples: [
  //             {
  //               question: { word_jp: "あの方は どなたですか。", word_de: "Wer ist diese Person dort drüben?", kanji: [["方", "かた"]] },
  //               answer: { word_jp: "...[あの方は] ミラーさんです。", word_de: "...Das ist Herr Miller.", kanji: [["方", "かた"]] }
  //             }
  //           ],
  //           note: null
  //         }
  //       ]
  //     },
  //     {
  //       header: "N も",
  //       description: "",
  //       grammarItems: [{
  //         title: null,
  //         description: "も wird benutzt, wenn für das, worüber man spricht der gleiche Sachverhalt gilt wie für etwas, das vorher geannant wurde.",
  //         examples: [{
  //           word_jp: "ミラーさんは 会社員です。グプタさんも 会社員です。",
  //           word_de: "Herr Miller ist Firmenangestellter. Herr Gupta auch. (wörtlich. Herr Gupta ist auch Firmenangestellter.)",
  //           kanji: [["会社員", "かいしゃいん"],["会社員", "かいしゃいん"]]
  //         }],
  //         note: null
  //       }]
  //     },
  //     {
  //       header: "N₁ の N₂",
  //       description: null,
  //       grammarItems: [{
  //         title: null,
  //         description: "Wenn das Nomen N₁  das Nomen N₂  näher betimmt, verbindet man die Nomina mit の. In dieser Lektion ist N₁  eine Firma oder Institurion, der N₂  angehört.",
  //         examples: [{ word_jp: "ミラーさんは  IMCの社員です", word_de: "Herr Miller ist Angestellter bei IMC", kanji: [["社員", "しゃいん"]] }],
  //         note: null
  //       }]
  //     },
  //     {
  //       header: "~さん",
  //       description: null,
  //       grammarItems: [{
  //         title: null,
  //         description: "さん wird an den Namen (Nachnamen oder Vornamen) des Gesprächspartners oder einer dritten Person angeschlossen. Da es Respect ausdrückt, wird es nie an den eigenen Namen angehängt. Bei kleinen Kindern hängt man anstelle von さん ein ちゃん an, das ein Gefühl von Vertrautheit beinhaltet.",
  //         examples: [{ word_jp: "あの方は ミラーさんです。", word_de: "Die Person dort drüben ist Herr Miller.", kanji: [["方", "かた"]] }],
  //         note: null
  //       }, {
  //         title: null,
  //         description: "Bei der Anrede des Gesprächspartners wird, wenn man seinen Namen kennt, nicht あなた (Sie) benutzt, sondern der Nach-oder Vorname plus さん verwendet.",
  //         examples: [
  //           {word_jp:"鈴木:ミラーさんは 学生ですか。", word_de:"Suzuki: Sind die Student, (Herr Miller)?", kanji:[["鈴木","すずき"]]},
  //           {word_jp:"ミラー：いいえ、会社員です。", word_de:"Miller: Nein, ich bin Firmenangestellter.", kanji:[["会社員","かいしゃいん"]]},
  //         ],
  //         note: "あなた wird gegenüber sehr eng vertrauten Personen (Ehepartner/-in, Geliebte/-r u.Ä.) benutzt. Wird es in anderen Situationen benutzt, kann es einen unhöflichen Eindruck machen, deshalb sollte man mit der Verwendung vorsichtig sein."
  //       }]
  //     }
  //   ]
  // }

  // get() {
  //   return this.grammar;
  // }
}
