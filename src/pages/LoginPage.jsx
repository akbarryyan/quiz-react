import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Username diperlukan");
      return;
    }
    localStorage.setItem("user", username);
    setError("");
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-[8px_8px_0_0_#000] border-4 border-black max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login Kuis</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan username"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg border-2 border-black hover:bg-blue-600 transition transform hover:scale-105"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
