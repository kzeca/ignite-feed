export interface PostContent {
    type: string;
    content: string;
}

enum Type {
    PARAGRAPH = 'paragraph',
    LINK = 'link'
}