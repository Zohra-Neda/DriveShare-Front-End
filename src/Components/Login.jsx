import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  return (
      <div className="bg-gray- h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold"><span className="text-yellow-500">Drive</span>Share</h1>
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
              className="ml-4 cursor-pointer hover:bg-yellow-500 hover:text-blue-t00 px-4 py-1 rounded-sm text-white focus:outline-none focus:bg-yellow-5"
            >
              GO
            </button>
          </form>
        </div>
      </div>
  );
};

export default Login;
