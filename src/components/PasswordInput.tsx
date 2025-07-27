import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onToggleVisibility: () => void;
}

export default function PasswordInput({ value, onChange, showPassword, onToggleVisibility }: PasswordInputProps) {
  return (
    <div className="flex items-center border-2 border-cyber-cyan rounded-xl px-4 py-2 bg-black/40 backdrop-blur-md">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter a secure password"
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-lg"
      />
      <button onClick={onToggleVisibility} type="button" className="text-cyber-cyan ml-4">
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}