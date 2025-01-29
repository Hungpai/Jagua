import { Kanji, KanjiPosition } from "./kanji";

export interface Vocabulary {
    id: number;
    lection: number;
    type: string;
    kanji: Array<KanjiPosition>;
    word_jp: string;
    word_de: string;
}
