import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../components/api/user";
import { setAccessToken } from "../services/localStorage";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password)
      .then((res) => {
        navigate("/home");
        setAccessToken(res.data.token);
      })
      .catch((err) => setErrorMsg(err.response.data.message));
  };

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/register");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/3 h-auto rounded-lg bg-white py-5 px-10 flex flex-col">
        <h1 className="text-3xl font-bold tracking-decentlyWide text-purple mb-3 mt-3">
          LOGIN
        </h1>
        <label htmlFor="username" className="tracking-decentlyWide ">
          username:
        </label>
        <input
          type="text"
          id="username"
          className="bg-[#E5E3F4] rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username" className="tracking-decentlyWide  mt-2">
          password:
        </label>
        <input
          type="password"
          id="password"
          className="bg-[#E5E3F4] rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={errorMsg ? "text-red" : "hidden"}>{errorMsg}</div>
        <div className="flex justify-evenly mt-8 gap-2">
          <button className="py-1 w-4/5 buttonSecondary " onClick={changeRoute}>
            register
          </button>
          <button
            type="submit"
            className="buttonPrimary bg-purple py-1 w-4/5 "
            onClick={handleLogin}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
