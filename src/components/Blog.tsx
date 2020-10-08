import React, {useEffect, useState} from 'react'

import fetchPosts from './helper/fetchPosts'

const Blog: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState<firebase.firestore.DocumentData[] | void>()

  useEffect(() => {
    const doFetch = async (): Promise<void> => {
      const posts = await fetchPosts()
      setPosts(posts)
    }

    doFetch()
  }, [])

  return <div>Blog</div>
}

export default Blog
