import type { PasswordAnalysis } from "@/lib/password-analyzer";

interface CriteriaChecklistProps {
  analysis: PasswordAnalysis | null;
  password: string;
}

export default function CriteriaChecklist({ analysis, password }: CriteriaChecklistProps) {
  if (!analysis) return null;

  const criteria = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Contains uppercase letter", valid: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", valid: /[a-z]/.test(password) },
    { label: "Contains number", valid: /[0-9]/.test(password) },
    { label: "Contains special symbol", valid: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="glassmorphism p-6 rounded-2xl">
      <h3 className="text-xl font-bold text-cyber-cyan mb-4">Password Criteria</h3>
      <ul className="space-y-2 text-sm">
        {criteria.map((item, index) => (
          <li key={index} className={item.valid ? "text-green-400" : "text-red-400"}>
            {item.valid ? "✅" : "❌"} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}