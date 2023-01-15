import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Author } from '../interfaces/Author';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    id: number;
    content: string;
    onDeleteComment: (id: number) => void;
    author?: Author;
}

export function Comment(props: CommentProps) {

    const { id ,content, onDeleteComment,
        author = {
          avatarUrl: "https://github.com/kzeca.png",
          name: "José Carlos"}
      } = props;

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(id);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar border={false} src={author.avatarUrl} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author.name}</strong>
                            <time title="12 de janeiro às 23:44h">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}