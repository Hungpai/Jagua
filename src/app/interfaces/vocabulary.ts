import { Kanji } from "./kanji";

export interface Vocabulary {
    id: number;
    lection: number;
    type: string;
    kanji: Array<Kanji>;
    word_jp: string;
    word_de: string;
}
