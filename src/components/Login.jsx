import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { createUser } from "../Redux/login/loginSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const handleChange = (e) => {
    setUsername(e.target.value);
  }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      toast.error("Please enter a username", {
        theme: "dark",
      });
      return;
    }
    console.log(username);
    dispatch(createUser(username));
    localStorage.setItem('user', JSON.stringify(username));
    toast(`Welcome, ${username}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
      <div className="bg-gray-900 text-white h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold"><span className="login-title">Drive</span>Share</h1>
        <div className="px-6 py-3 bg-black rounded-sm">
          <form onSubmit={handleSubmit} className="flex opacity-100">
            <div id="bg-input" className="p-1">
              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={username}
                className="w-1/2 bg-black px-4 py-1 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="login-btn ml-4 cursor-pointer hover:text-blue-t00 px-4 py-1 rounded-sm text-white focus:outline-none focus:bg-yellow-5"
            >
              GO
            </button>
          </form>
        </div>
      </div>
  );
};

export default Login;
