import { Injectable, inject } from '@angular/core';
import { Dialogue } from '../interfaces/dialogue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {
  private http = inject(HttpClient);

  private apiServeUrl = environment.apiBaseUrl;

  public getDialogue(lection: number): Observable<Dialogue> {
    return this.http.get<Dialogue>(`${this.apiServeUrl}/lection/dialogue/${lection}`);
  }
  // dialogue: Dialogue;

  // constructor() {
  //   this.dialogue = {
  //     title: "Darf ich mich vorstellen",
  //     dialogue: [
  //       ["Satō", {"word_jp":"おはよう ございます。", "word_de":"Guten Morgen!", "kanji":[]}],
  //       ["Yamato", {"word_jp":"おはよう ございます。\n佐藤さん、こちらは マイク・ミラーさんです。", "word_de":"Guten Morgen!\nFrau Satō, das hier ist Mike Miller.", "kanji":[["佐藤","さとう"]]}],
  //       ["Miller", {"word_jp":"初めまして。\nマイク・ミラーです。\nアメリカから 来ました。\nどうぞ よろしく。", "word_de":"Darf ich mich auch vorstellen?\nIch heiße Mike Miller.\nIch komme aus den USA.\nEs freut mich, Sie kennen zu lernen.", "kanji":[["初", "はじ"], ["来", "き"]]}],
  //       ["Satō", {"word_jp":"佐藤けい子です。\nどうぞ よろしく。", "word_de":"Ich heiße Keiko Satō.\nEs freut mich, Sie kennen zu lernen.", "kanji":[["佐藤","さとう"],["子", "こ"]]}],
  //     ]
  //   }
  // }

  // get() {
  //   return this.dialogue;
  // }
}
