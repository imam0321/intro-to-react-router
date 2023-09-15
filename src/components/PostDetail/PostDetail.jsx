import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();

  const {body} = postDetail;

  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>{body}</p>  
      <button onClick={handelNavigate}>Go Back</button>    
    </div>
  );
};

export default PostDetail;