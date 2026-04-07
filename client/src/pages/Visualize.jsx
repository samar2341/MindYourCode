import { useParams } from "react-router-dom";
import { useState } from "react";
import { examples } from "../data/examples";
import CodePanel from "../components/CodePanel";
import ExplanationPanel from "../components/ExplanationPanel";
import Controls from "../components/Controls";

export default function Visualize() {
  const { id } = useParams();
  const example = examples[id];

  const [step, setStep] = useState(0);

  if (!example) return <p>Not Found</p>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      <div className="grid grid-cols-2 gap-4">
        
        <CodePanel code={example.code} activeLine={example.steps[step].line} />
        
        <ExplanationPanel explanation={example.steps[step].explanation} />

      </div>

      <Controls step={step} setStep={setStep} total={example.steps.length} />

    </div>
  );
}