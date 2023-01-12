import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Adoleta Toppissimo" 
            content="Sujou, ma brother"
          />
          <Post 
            author="Teste do testonildo" 
            content="Sujou é porra nenhuma"
          />
        </main>
      </div>
    </div>
  )
}

