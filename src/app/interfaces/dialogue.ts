import { Vocabulary } from "./vocabulary";

export interface DialogueItem {
    id: number;
    content: Vocabulary;
    name: string;

}

export interface Dialogue {
    id: number;
    lection: number;
    dialogue: Array<DialogueItem>;
    title: string;
}
