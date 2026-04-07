import { useNavigate } from "react-router-dom";

export default function Learn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      
      <h1 className="text-3xl mb-6">Choose Example</h1>

      <div className="grid grid-cols-2 gap-6">
        
        <div
          onClick={() => navigate("/visualize/for-loop")}
          className="bg-slate-800 p-6 rounded-xl cursor-pointer hover:bg-slate-700"
        >
          <h2 className="text-xl">For Loop</h2>
        </div>

      </div>
    </div>
  );
}