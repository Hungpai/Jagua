export interface Kanji {
    id: number;
    kanji: string;
    kana: string;
}

export interface KanjiPosition {
    kanji: Kanji;
    position: number;
}