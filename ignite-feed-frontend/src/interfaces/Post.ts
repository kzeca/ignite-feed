import { Author } from "./Author";
import { PostContent } from "./PostContent";

export interface Post {
    id: number;
    author: Author;
    content: PostContent[];
    published: string;
}