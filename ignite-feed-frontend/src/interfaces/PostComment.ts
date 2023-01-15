import { Author } from "./Author";

export interface PostComment {
    id: number;
    content: string;
    author?: Author;
}