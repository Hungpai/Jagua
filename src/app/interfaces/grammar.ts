import { Dialogue } from "./dialogue";
import { Vocabulary } from "./vocabulary";
import { Example } from "./example";

export interface GrammarItem {
    id: number;
    examples: Array<Vocabulary|Example|Dialogue>
    description: string;
    title: string|null;
    note: string|null;
}

export interface Grammar {
    id: number;
    description: string|null;
    header: string;
    lection: number;
    grammarItems: Array<GrammarItem>;
}
