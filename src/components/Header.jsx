import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <img src={igniteLogo} alt="Logotipo do Ignite"/>
                <strong>Ignite Feed</strong> 
            </div>
        </header>
        
    );
}