import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import dataMock from '../Mocks/dataMock.json'



export function Post({ author, published, content }) {
    
    const [comments, setComments] = useState(dataMock.comments);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(new Date(published), "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(published), {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, 
            {
                content: newCommentText, 
                id: comments.length !== 0 ? comments[comments.length - 1].id+1 : 1
            }]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentIdToDelete) {
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
                {comments.map (comment => {
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