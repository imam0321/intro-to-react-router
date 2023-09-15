import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {

  const {id, title, body} = post;
  return (
    <div className="post">
      <h4>Title: {title}</h4>
      <p>Details: {body}</p>
      <p><Link to={`/post/${id}`}>Show Details</Link></p>
    </div>
  );
};

export default Post;