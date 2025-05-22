import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function Signup() {
  return (
    <>
      <div className="nav">
        <Link to="/">Lock In</Link>
      </div>

      <AuthForm type="signup" />

      <p>Already have an account?</p>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
    </>
  );
}