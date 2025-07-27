import type { PasswordAnalysis } from "@/lib/password-analyzer";

interface StrengthMeterProps {
  analysis: PasswordAnalysis | null;
}

export default function StrengthMeter({ analysis }: StrengthMeterProps) {
  if (!analysis) return null;

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-400", "bg-blue-500", "bg-green-500"];
  const score = analysis.score;

  return (
    <div className="mt-6">
      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full ${strengthColors[score]} transition-all duration-300`} style={{ width: `${(score / 4) * 100}%` }} />
      </div>
      <p className="mt-2 text-center text-sm text-gray-400">{strengthLabels[score]}</p>
    </div>
  );
}