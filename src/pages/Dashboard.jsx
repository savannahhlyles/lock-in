import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <div className="nav">
        <Link to="/">Lock In</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>

      <p>Dashboard</p>
    </>
  );
}
