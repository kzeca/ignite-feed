import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    border?: boolean;
}

export function Avatar(avatarProps: AvatarProps) {
    const { border = true, ...props } = avatarProps;

    return (
        <img 
            className={border ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}