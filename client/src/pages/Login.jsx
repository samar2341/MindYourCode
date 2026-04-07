import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    alert("Google login flow is not connected yet. Backend OAuth integration can be added here.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-black/30">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Sign in with Google</h1>
          <p className="mt-3 text-sm text-slate-400">
            Use your Google account to continue with Mind Your Code.
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285f4" d="M533.5 278.4c0-18.7-1.5-37.8-4.6-56.4H272v106.8h146.9c-6.3 34-25 62.9-53.7 82.3v68.4h86.8c50.8-46.8 80.5-115.8 80.5-200.9z" />
            <path fill="#34a853" d="M272 544.3c72.5 0 133.4-24 177.9-65.4l-86.8-68.4c-24.2 16.2-55 25.8-91.1 25.8-69.9 0-129.2-47.2-150.4-110.6H31.4v69.5C75.6 482 168.7 544.3 272 544.3z" />
            <path fill="#fbbc04" d="M121.6 324.7c-10.8-32.6-10.8-67.6 0-100.2V155h-90.2C10.7 211.6 0 242.8 0 278.4s10.7 66.8 31.4 123.4l90.2-77.1z" />
            <path fill="#ea4335" d="M272 107.7c39.6 0 75.1 13.6 103 40.4l77.2-77.2C405.4 24.4 345.5 0 272 0 168.7 0 75.6 62.3 31.4 155l90.2 69.5C142.8 155 202.1 107.7 272 107.7z" />
          </svg>
          Continue with Google
        </button>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-400">
          <p className="font-semibold text-white">Note</p>
          <p className="mt-2">This page is a UI-only Google sign-in screen. Link it to your OAuth backend when ready.</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full rounded-2xl bg-slate-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
