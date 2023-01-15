import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import dataMock from '../Mocks/dataMock.json'
import { Author } from '../interfaces/Author';
import { PostContent } from '../interfaces/PostContent';
import { PostComment } from '../interfaces/PostComment';
import { Comment } from './Comment';


interface PostProps {
    author: Author;
    published: string;
    content: PostContent[];
}

export function Post(props: PostProps) {
    
    const { author, published, content } = props;

    const [comments, setComments] = useState<PostComment[]>(dataMock.comments);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(new Date(published), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(published), {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, 
            {
                content: newCommentText, 
                id: comments.length !== 0 ? comments[comments.length - 1].id+1 : 1
            }]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentIdToDelete: number): void {
        const commentsWithouDeletedOne = comments.filter(comment => comment.id !== commentIdToDelete);
        setComments(commentsWithouDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map( line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    value={newCommentText} 
                    onChange={handleNewCommentChange} 
                    name='comment' 
                    placeholder='Deixe um comentário' 
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map ((comment: PostComment) => {
                    return(
                        <Comment 
                            key={comment.id}
                            id={comment.id}
                            content={comment.content} 
                            author={comment.author}
                            onDeleteComment={deleteComment}
                        />
                    ) 
                })}
            </div>
        </article>
    )
}