import { useLoaderData } from "react-router-dom";


const FriendDetail = () => {
  const friend = useLoaderData();
  
  return (
    <div>
      <h1>details</h1>
      <h3>Company Name: {friend.company.name}</h3> 
      <p>Website: {friend.website}</p>
    </div>
  );
};

export default FriendDetail;