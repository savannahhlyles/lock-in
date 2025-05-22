import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ type }) {
  const isLogin = type === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "signup";
    const res = await fetch(`http://localhost:3001/api/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      if (isLogin) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setMessage("All set. Now log in and get this thing done.");
        navigate("/login");
      }
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}