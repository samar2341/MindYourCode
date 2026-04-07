export default function ExplanationPanel({ explanation }) {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-xl mb-2">Explanation</h2>
      <p className="text-gray-300">{explanation}</p>
    </div>
  );
}