import { Comment } from './comment';

export class Question {
    qid: number;
    subject: string;
    body: string;
    folder: number;
    date: Date;
    comments: Comment[];
}