export type PasswordAnalysis = {
  score: number;
  isCommonPassword: boolean;
  suggestions: string[];
};

export function analyzePassword(password: string): PasswordAnalysis {
  const commonPasswords = ["123456", "password", "admin", "qwerty", "abc123"];
  const isCommon = commonPasswords.includes(password);

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const suggestions: string[] = [];
  if (password.length < 8) suggestions.push("Use at least 8 characters.");
  if (!/[A-Z]/.test(password)) suggestions.push("Add uppercase letters.");
  if (!/[a-z]/.test(password)) suggestions.push("Add lowercase letters.");
  if (!/[0-9]/.test(password)) suggestions.push("Add numbers.");
  if (!/[^A-Za-z0-9]/.test(password)) suggestions.push("Add symbols.");

  return {
    score,
    isCommonPassword: isCommon,
    suggestions,
  };
}