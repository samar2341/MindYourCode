import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center flex-col text-center">
      
      <h1 className="text-5xl font-bold mb-4">
        Understand Code, Not Just Run It
      </h1>

      <p className="text-gray-400 mb-6">
        Visualize execution step-by-step
      </p>

      <button
        onClick={() => navigate("/learn")}
        className="bg-blue-500 px-6 py-3 rounded-xl"
      >
        Start Learning 🚀
      </button>

    </div>
  );
}