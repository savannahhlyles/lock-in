import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="nav">
        <Link to="/">Lock In</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      
      <h1>The site your procrastination fears.</h1>
      <p>Set the goal. Lock in. Submit the proof.</p>
      
      <Link to="/signup">
        <button>I'M READY</button>
      </Link>
    </>
  );
}