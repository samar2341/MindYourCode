export default function CodePanel({ code, activeLine }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl font-mono">
      
      {code.map((line, index) => (
        <div
          key={index}
          className={`p-1 ${
            index === activeLine ? "bg-blue-500 text-white" : "text-gray-300"
          }`}
        >
          {line}
        </div>
      ))}

    </div>
  );
}