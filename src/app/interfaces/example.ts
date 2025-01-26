import { Vocabulary } from "./vocabulary";

export interface Example {
    id: number;
    lection: number;
    question: Vocabulary;
    answer: Vocabulary;
    type: string;
}
