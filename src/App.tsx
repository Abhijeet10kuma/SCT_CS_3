import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import MatrixBackground from "./components/MatrixBackground";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import CriteriaChecklist from "./components/CriteriaChecklist";
import SecurityTips from "./components/SecurityTips";
import { analyzePassword, type PasswordAnalysis } from "./lib/password-analyzer";

export default function PasswordAnalyzer() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [analysis, setAnalysis] = useState<PasswordAnalysis | null>(null);

  useEffect(() => {
    const result = analyzePassword(password);
    setAnalysis(result);
  }, [password]);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        <motion.header 
          className="text-center py-8 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glassmorphism rounded-2xl p-6 max-w-2xl mx-auto holographic">
            <motion.h1 
              className="font-orbitron text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-pink to-cyber-green"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Shield className="inline mr-4 text-cyber-cyan" size={48} />
              CyberGuard
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Password Strength Analyzer
            </motion.p>
            <motion.div 
              className="mt-4 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="inline-block animate-pulse">🤖</span>
              <span className="ml-2">AI-Powered Security Assessment</span>
            </motion.div>
          </div>
        </motion.header>

        <main className="flex-1 px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glassmorphism rounded-3xl p-8 mb-8 holographic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-cyber-cyan">
                  <Lock className="inline mr-3" size={32} />
                  Enter Your Password
                </h2>
                <p className="text-gray-300 text-lg">
                  Type your password to see its strength in real-time
                </p>
              </div>

              <PasswordInput
                value={password}
                onChange={handlePasswordChange}
                showPassword={showPassword}
                onToggleVisibility={togglePasswordVisibility}
              />

              <StrengthMeter analysis={analysis} />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <CriteriaChecklist analysis={analysis} password={password} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <SecurityTips />
              </motion.div>
            </div>

            <AnimatePresence>
              {analysis?.isCommonPassword && (
                <motion.div
                  className="glassmorphism rounded-3xl p-8 mb-8 holographic border-2 border-cyber-red"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <span className="text-cyber-red">⚠️</span>
                    </motion.div>
                    <h3 className="font-orbitron text-2xl font-bold mb-4 text-cyber-red">
                      Common Password Detected!
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      This password appears in common password lists and is easily guessable.
                    </p>
                    <div className="glassmorphism rounded-xl p-4 bg-cyber-red/10 border border-cyber-red/30">
                      <p className="text-cyber-red">
                        <Shield className="inline mr-2" size={20} />
                        Please choose a more unique password for better security.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <motion.footer 
          className="text-center py-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="glassmorphism rounded-2xl p-6 max-w-2xl mx-auto holographic">
            <div className="text-gray-400">
              <Shield className="inline mr-2" size={20} />
              Your password is analyzed locally and never sent to any server
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <Lock className="inline mr-2" size={16} />
              Privacy-first security assessment
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}