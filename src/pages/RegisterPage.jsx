import colorNames from "daisyui/src/colors/colorNames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../components/api/user";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(username, password, confirmPassword, email)
      .then(() => navigate("/login"))
      .catch((err) => {
        setErrorMsg(err.response.data.message);
      });
  };

  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/login");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/3 h-auto rounded-lg bg-white py-5 px-10 flex flex-col">
        <h1 className="text-3xl font-bold tracking-decentlyWide text-purple mb-3 mt-3">
          Register
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
        <label htmlFor="password" className="tracking-decentlyWide  mt-2">
          password:
        </label>
        <input
          type="password"
          id="password"
          className="bg-[#E5E3F4] rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          htmlFor="confirmPassword"
          className="tracking-decentlyWide  mt-2"
        >
          confirm password:
        </label>
        <input
          type="password"
          id="password"
          className="bg-[#E5E3F4] rounded-md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label htmlFor="email" className="tracking-decentlyWide  mt-2">
          email:
        </label>
        <input
          type="text"
          id="email"
          className="bg-[#E5E3F4] rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={errorMsg ? "text-red" : "hidden"}>{errorMsg}</div>
        <div className="flex justify-evenly mt-8 gap-2">
          <button className="py-1 w-4/5 buttonSecondary" onClick={changeRoute}>
            log in
          </button>
          <button
            type="submit"
            className="buttonPrimary bg-purple py-1 w-4/5 "
            onClick={handleRegister}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
