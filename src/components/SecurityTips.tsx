export default function SecurityTips() {
  return (
    <div className="glassmorphism p-6 rounded-2xl">
      <h3 className="text-xl font-bold text-cyber-cyan mb-4">Security Tips</h3>
      <ul className="list-disc ml-6 space-y-2 text-sm text-gray-300">
        <li>Avoid using common passwords or personal information.</li>
        <li>Use a mix of letters, numbers, and symbols.</li>
        <li>Change your passwords regularly.</li>
        <li>Enable two-factor authentication (2FA) wherever possible.</li>
        <li>Use a password manager for complex and unique passwords.</li>
      </ul>
    </div>
  );
}