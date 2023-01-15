import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import dataMock from './Mocks/dataMock.json'

const posts = dataMock.posts;

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            if (!post) return null
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                published={post.published}
              />
            )
            })}
        </main>
      </div>
    </div>
  )
}

