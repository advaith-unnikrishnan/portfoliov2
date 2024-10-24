import Link from 'next/link'
import BlogLayout from '../components/BlogLayout'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <BlogLayout>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="text-custom-coral hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.date}</p>
            {post.excerpt && <p className="text-gray-800">{post.excerpt}</p>}
          </div>
        ))}
      </div>
    </BlogLayout>
  )
}
