import { Link } from 'react-router-dom';
import '../Friend/Friend.css'

const Friend = ({ friend }) => {
  const {name, email, phone, id} = friend;
  return (
    <div className="friend">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p><Link to={`/friend/${id}`}>Show me details</Link></p>
    </div>
  );
};

export default Friend;