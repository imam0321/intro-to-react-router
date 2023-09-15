
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData()
  console.log(posts);
  return (
    <div>
      <h1>This is a post</h1>
      {
        posts.map(post => <Post 
          key={post.id}
          post={post}
          ></Post>)
      }
    </div>
  );
};

export default Posts;<h1>this is a post</h1>