import styles from './Avatar.module.css'

export function Avatar({ border = true, src }) {
    return (
        <img 
            className={border ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}