import { Answer } from './Answer';

export class Proposition {
    id: string;
    proposition: string;
    extraInfo: string;
    added: number;
    answers: Answer[] = [];
}
