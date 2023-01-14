import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/kzeca.png" />
                    <div className={styles.authorInfo}>
                        <strong>José Carlos</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title="12 de janeiro às 23:44h" dataTime="2023-12-01 23:43:35">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>I'm just a poor wayfaring strange</p>
                <p>While traveling thru this world below</p>
                <p><a href="">wayfaring.stranger</a></p>
                <p>
                    <a href="">#ImjustgoingoverJordan</a>{' '}
                    <a href="">#Imjustgoingoverhome</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}