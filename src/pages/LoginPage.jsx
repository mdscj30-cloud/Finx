import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Bot, Mail, Lock, LogIn, Briefcase, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/SupabaseAuthContext.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const [role, setRole] = useState('Client');

  const handleLogin = async () => {
    setIsLoading(true);
    // FIX: Passed as object { email, password } to match AuthContext definition
    const { error } = await signIn({ email, password });
    if (error) {
      // The toast is already handled in the context
    } else {
      toast({
        title: `Logged in as ${role}`,
        description: "Redirecting to your dashboard...",
      });
      if (role === 'CPA') {
        navigate('/cpa/dashboard');
      } else {
        navigate('/client/dashboard');
      }
    }
    setIsLoading(false);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    // FIX: Passed as object { email, password } to match AuthContext definition
    const { error } = await signUp({ email, password });
    if (error) {
      // The toast is already handled in the context
    } else {
      toast({
        title: "Sign Up Successful!",
        description: "Please check your email to confirm your account. You will be redirected to login.",
      });
      setActiveTab('signin');
    }
    setIsLoading(false);
  };
  
    const handleDemoLogin = (demoRole) => {
        const demoEmail = demoRole === 'CPA' ? 'cpa-demo@finxisai.com' : 'client-demo@finxisai.com';
        const demoPassword = 'password';
        setEmail(demoEmail);
        setPassword(demoPassword);
        setRole(demoRole);
    }

  return (
    <>
      <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <title>Login - FinxisAI</title>
      </Helmet>
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Bot className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">FinxisAI</h1>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin"><LogIn className="w-4 h-4 mr-2" />Sign In</TabsTrigger>
              <TabsTrigger value="signup"><UserPlus className="w-4 h-4 mr-2" />Sign Up</TabsTrigger>
            </TabsList>
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <TabsContent value="signin" className="mt-0">
                <LoginForm
                  role={role}
                  setRole={setRole}
                  onLogin={handleLogin}
                  isLoading={isLoading}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  isSignIn
                  setActiveTab={setActiveTab}
                  handleDemoLogin={handleDemoLogin}
                />
              </TabsContent>
              <TabsContent value="signup" className="mt-0">
                <LoginForm
                  role={role}
                  setRole={setRole}
                  onLogin={handleSignUp}
                  isLoading={isLoading}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  setActiveTab={setActiveTab}
                />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </>
  );
};

const LoginForm = ({ role, setRole, onLogin, isLoading, email, setEmail, password, setPassword, isSignIn = false, setActiveTab, handleDemoLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800">{isSignIn ? 'Welcome Back!' : 'Create an Account'}</h2>
      
      {isSignIn && (
        <Tabs defaultValue={role} onValueChange={setRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Client"><User className="w-4 h-4 mr-2" />Client</TabsTrigger>
            <TabsTrigger value="CPA"><Briefcase className="w-4 h-4 mr-2" />CPA</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`email-${role}`}>Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input id={`email-${role}`} type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`password-${role}`}>Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input id={`password-${role}`} type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="pl-10" />
          </div>
        </div>
      </div>
       {isSignIn && (
        <div className="text-center text-sm">
            <p className="text-slate-500">Or use a demo account:</p>
            <div className="flex gap-2 mt-2">
                <Button variant="outline" type="button" className="w-full" onClick={() => handleDemoLogin('Client')}>
                    <User className="w-4 h-4 mr-2" /> Client Demo
                </Button>
                <Button variant="outline" type="button" className="w-full" onClick={() => handleDemoLogin('CPA')}>
                    <Briefcase className="w-4 h-4 mr-2" /> CPA Demo
                </Button>
            </div>
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
        ) : (
          <>
            {isSignIn ? <LogIn className="mr-2 h-5 w-5" /> : <UserPlus className="mr-2 h-5 w-5" />}
            {isSignIn ? `Sign In as ${role}` : 'Sign Up'}
          </>
        )}
      </Button>
      <p className="text-center text-sm text-slate-500">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}
        <Button variant="link" type="button" onClick={() => setActiveTab(isSignIn ? 'signup' : 'signin')} className="font-medium text-blue-600">
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </Button>
      </p>
    </form>
  );
};

export default LoginPage;