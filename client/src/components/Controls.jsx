export default function Controls({ step, setStep, total }) {
  return (
    <div className="flex gap-4 mt-6">
      
      <button
        onClick={() => setStep(step - 1)}
        disabled={step === 0}
        className="bg-gray-700 px-4 py-2 rounded"
      >
        Prev
      </button>

      <button
        onClick={() => setStep(step + 1)}
        disabled={step === total - 1}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Next
      </button>

    </div>
  );
}