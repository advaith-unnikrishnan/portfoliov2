import BlogLayout from '../../components/BlogLayout'
import { getPostData, getSortedPostsData } from '../../../lib/posts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id)
  return (
    <BlogLayout>
      <article className="prose lg:prose-xl">
        <h1>{postData.title}</h1>
        <div className="text-gray-600 mb-4">{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  )
}
