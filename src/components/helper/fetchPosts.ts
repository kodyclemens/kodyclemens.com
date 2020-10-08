import firebase from '../../config/firebase'

const firestore = firebase.firestore()

export default async function fetchPosts(): Promise<
  firebase.firestore.DocumentData[]
> {
  const content: firebase.firestore.DocumentData[] = []

  const posts = await firestore.collection('posts').get()

  posts.forEach(post => content.push(post.data()))
  return content
}
