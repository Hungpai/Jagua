import { Injectable } from '@angular/core';
import { Vocabulary } from '../interfaces/vocabulary';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  private apiServeUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getVocabulary(lection:number): Observable<Vocabulary[]> {
    return this.http.get<Vocabulary[]>(`${this.apiServeUrl}/lection/voc/${lection}`);
  }

  public getPattern(lection: number): Observable<Vocabulary[]> {
    return this.http.get<Vocabulary[]>(`${this.apiServeUrl}/lection/pattern/${lection}`);
  }
}

  // vocabulary: Vocabulary[];

  // constructor() {
  //   this.vocabulary = [
  //     { 'word_jp': 'わたし', 'word_de': 'ich', 'kanji': [] },
  //     { 'word_jp': 'あなた', 'word_de': 'Sie', 'kanji': [] },
  //     {
  //       'word_jp': 'あの人',
  //       'word_de': 'er, sie, die Person dort drüben',
  //       'kanji': [['人', 'ひと']]
  //     },
  //     {
  //       'word_jp': 'あの方',
  //       'word_de': 'er, sie, … (höflich)',
  //       'kanji': [['方', 'かた']]
  //     },
  //     { 'word_jp': '~さん', 'word_de': 'Herr, Frau', 'kanji': [] },
  //     { 'word_jp': '~ちゃん', 'word_de': 'Suffix, Vornamen von Kindern', 'kanji': [] },
  //     {
  //       'word_jp': '~人',
  //       'word_de': 'Suffix, Nationalität',
  //       'kanji': [['人', 'じん']]
  //     },
  //     {
  //       'word_jp': '先生',
  //       'word_de': 'Lehrer/-in, Dozent/-in (nicht eigener Beruf)',
  //       'kanji': [['先生', 'せんせい']]
  //     },
  //     {
  //       'word_jp': '教師',
  //       'word_de': 'Lehrer/-in, Dozent/-in',
  //       'kanji': [['教師', 'きょうし']]
  //     },
  //     { 'word_jp': '学生', 'word_de': 'Student/-in', 'kanji': [['学生', 'がくせい']] },
  //     { 'word_jp': '会社員', 'word_de': 'Angestellte/-r', 'kanji': [['会社員', 'かいしゃいん']] },
  //     {
  //       'word_jp': '社員',
  //       'word_de': 'Angestellte/-r einer Firma',
  //       'kanji': [['社員', 'しゃいん']]
  //     },
  //     {
  //       'word_jp': '銀行員',
  //       'word_de': 'Bankangestellte/-r',
  //       'kanji': [['銀行員', 'ぎんこういん']]
  //     },
  //     { 'word_jp': '医者', 'word_de': 'Arzt/Ärztin', 'kanji': [['医者', 'いしゃ']] },
  //     {
  //       'word_jp': '研究者',
  //       'word_de': 'Forscher/in',
  //       'kanji': [['研究者', 'けんきゅうしゃ']]
  //     },
  //     { 'word_jp': '大学', 'word_de': 'Universität', 'kanji': [['大学', 'だいがく']] },
  //     { 'word_jp': '病院', 'word_de': 'Krankenhaus', 'kanji': [['病院', 'びよういん']] },
  //     { 'word_jp': 'だれ', 'word_de': 'wer', 'kanji': [] },
  //     { 'word_jp': 'どなた', 'word_de': 'wer (höflich)', 'kanji': [] },
  //     { 'word_jp': 'ー歳', 'word_de': '- Jahre alt', 'kanji': [['歳', 'さい']] },
  //     { 'word_jp': '何歳', 'word_de': 'wie alt', 'kanji': [['何歳', 'なんさい']] },
  //     { 'word_jp': 'おいくつ', 'word_de': 'wie alt (höflich)', 'kanji': [] },
  //     { 'word_jp': 'はい', 'word_de': 'ja', 'kanji': [] },
  //     { 'word_jp': 'いいえ', 'word_de': 'nein', 'kanji': [] },
  //     { 'word_jp': '初めまして', 'word_de': 'Darf ich mich vorstellen?', 'kanji': [["初","はじ"]] },
  //     { 'word_jp': '~から 来ました。', 'word_de': 'Ich komme aus ~.', 'kanji': [["来", "き"]] },
  //     {
  //       'word_jp': '「どうぞ」よるしく「お願いします」',
  //       'word_de': 'Es freut mich, Sie kennen zu lernen! ',
  //       'kanji': [["願","ねが"]]
  //     },
  //     {
  //       'word_jp': '失礼ですが',
  //       'word_de': 'Entschuldigen Sie bitte, aber…',
  //       'kanji': [['失礼', 'しつれい']]
  //     },
  //     {
  //       'word_jp': 'お名前は?',
  //       'word_de': 'Wie heißen Sie bitte?',
  //       'kanji': [['名前', 'なまえ']]
  //     },
  //     {
  //       'word_jp': 'こちらは ~さんです。',
  //       'word_de': 'Das hier ist Herr/Frau~',
  //       'kanji': []
  //     }
  //   ]
  // }

  // constructor() {
  //   this.vocabulary = [
  //     {
  //       word_jp: "わたし",
  //       word_de: "ich",
  //       kanji: [],
  //     },
  //     {
  //       word_jp: "あなた",
  //       word_de: "Sie",
  //       kanji: [],
  //     },
  //     {
  //       word_jp: "あの人",
  //       word_de: "er, sie, die Person dort drüben",
  //       kanji: [["人","ひと"]]
  //     },
  //     {
  //       word_jp: "あの方",
  //       word_de: "er, sie, … (höflich)",
  //       kanji: [["方","かた"]]
  //     },
  //     {
  //       word_jp: "~さん",
  //       word_de: "Herr, Frau",
  //       kanji: [],
  //     },
  //     {
  //       word_jp: "~ちゃん",
  //       word_de: "Suffix, Vornamen von Kindern",
  //       kanji: [],
  //     },
  //     {
  //       word_jp: "~人",
  //       word_de: "Suffix, Nationalität",
  //       kanji: [["人","じん"]]
  //     },
  //     {
  //       word_jp: "先生",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先生","せんせい"]]
  //     },
  //     {
  //       word_jp: "教師",
  //       word_de: "Lehrer/-in, Dozent/-in",
  //       kanji: [["教師","きょうし"]]
  //     },
  //     {
  //       word_jp: "がくせい",
  //       word_de: "Student/-in",
  //       kanji: [["学生","がくせい"]]
  //     },
  //     {
  //       word_jp: "会社員",
  //       word_de: "Angestellte/-r",
  //       kanji: [["会社員","かいしゃいん"]]
  //     },
  //     {
  //       word_jp: "しゃいん",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "いしゃ",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "けんきゅうしゃ",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "だいがく",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "びよういん",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "だれ",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "どなた",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "ーさい",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "なんさい",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "おいくつ",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "はい",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "いいえ",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "はじめまして",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "~からきました",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "「どうぞ」よるしく「おねがいします」",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "しつれいですが",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "おなまえは？",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //     {
  //       word_jp: "こしらは　~さんです。",
  //       word_de: "Lehrer/-in, Dozent/-in (nicht eigener Beruf)",
  //       kanji: [["先","せん"], ["生","せい"]]
  //     },
  //   ]
  // }

  // get() {
  //   return this.vocabulary;
  // }
