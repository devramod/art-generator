import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-slate-200">
      <h1 onClick={() => navigate("/")} className="font-semibold text-lg text-slate-900 cursor-pointer">Art Generator</h1>
      <button onClick={() => navigate('/createpost')} className="px-4 py-2 bg-violet-700 hover:bg-violet-800 rounded-md text-white text-sm font-medium">Create</button>
    </header>
  );
};

export default Header;
