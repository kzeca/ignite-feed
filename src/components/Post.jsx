import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/kzeca.png" />
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
        </article>
    )
}