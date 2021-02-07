import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {
	title: string
	slug: string
}

async function getPosts() {
	// curl ""
	const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
	).then((res) => res.json())

	const posts = res.posts
	return posts
}

export const getStaticProps = async ({ params }) => {
	const posts = await getPosts()
	return {
		revalidate: 10,
		props: { posts }
	}
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  return (
    <div className={styles.container}>
        <h1>Hello : )</h1>
    </div>
  )
}

export default Home