import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function Login() {
  return (
    <>
      <div className="nav">
        <Link to="/">Lock In</Link>
      </div>

      <AuthForm type="login" />

      <p>Don't have an account yet?</p>
      <Link to="/signup">
        <button>SIGN UP</button>
      </Link>
    </>
  );
}