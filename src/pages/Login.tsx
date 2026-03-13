import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/");
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow w-96 rounded-lg">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <input
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button className="bg-yellow-500 text-white w-full py-2 rounded font-semibold">
          Login
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-3 border w-full py-2 rounded font-semibold"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
}
