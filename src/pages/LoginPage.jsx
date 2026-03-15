import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, LogIn, Briefcase, User, UserPlus, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext.jsx';
import { supabase } from '@/lib/customSupabaseClient';

const TABS = { SIGNIN: 'signin', SIGNUP: 'signup', FORGOT: 'forgot' };

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const [tab, setTab] = useState(TABS.SIGNIN);
  const [role, setRole] = useState('Client');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await signIn({ email, password });
    if (!error) {
      toast({ title: `Welcome back!`, description: 'Redirecting to your dashboard...' });
      navigate(role === 'CPA' ? '/cpa/dashboard' : '/client/dashboard');
    }
    setIsLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast({ variant: 'destructive', title: 'Weak password', description: 'Password must be at least 8 characters.' });
      return;
    }
    setIsLoading(true);
    const { error } = await signUp({
      email,
      password,
      options: { data: { full_name: fullName, role } },
    });
    if (!error) {
      toast({ title: 'Account created!', description: 'Check your email to confirm your account.' });
      setTab(TABS.SIGNIN);
    }
    setIsLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({ variant: 'destructive', title: 'Enter your email first.' });
      return;
    }
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://finxisai.com/reset-password',
    });
    if (!error) setForgotSent(true);
    else toast({ variant: 'destructive', title: 'Error', description: error.message });
    setIsLoading(false);
  };

  const fillDemo = (demoRole) => {
    setEmail(demoRole === 'CPA' ? 'cpa-demo@finxisai.com' : 'client-demo@finxisai.com');
    setPassword('Demo@1234');
    setRole(demoRole);
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Login – FinxisAI</title>
      </Helmet>

      <div className="min-h-screen flex">
        {/* Left branding panel */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white" />
          </div>
          <Link to="/" className="flex items-center gap-3 z-10">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-white font-bold text-2xl">FinxisAI</span>
          </Link>

          <div className="z-10 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white leading-tight mb-4">
                AI-Powered Accounting<br />for Modern Businesses
              </h2>
              <p className="text-blue-100 text-lg">
                Join 1,000+ CPAs and SMBs automating their financial operations with FinxisAI.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Hours saved/week', value: '15+' },
                { label: 'Cost reduction', value: '60%' },
                { label: 'Firms onboarded', value: '1,000+' },
                { label: 'Uptime', value: '99.9%' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-blue-200 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-blue-200 text-sm z-10">© {new Date().getFullYear()} FinxisAI. All rights reserved.</p>
        </div>

        {/* Right form panel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-slate-50">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-md"
          >
            {/* Mobile logo */}
            <div className="flex lg:hidden justify-center mb-8">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <span className="font-bold text-2xl text-slate-900">FinxisAI</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">

              {/* ── SIGN IN ── */}
              {tab === TABS.SIGNIN && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Welcome back</h2>
                  <p className="text-slate-500 text-sm mb-6">Sign in to your FinxisAI account</p>

                  {/* Role selector */}
                  <div className="flex gap-2 mb-6 p-1 bg-slate-100 rounded-lg">
                    {['Client', 'CPA'].map(r => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
                          role === r ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {r === 'Client' ? <User className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                        {r}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="signin-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input id="signin-email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="pl-9" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="signin-password">Password</Label>
                        <button type="button" onClick={() => setTab(TABS.FORGOT)} className="text-xs text-blue-600 hover:underline">
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input id="signin-password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required className="pl-9 pr-9" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                      {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><LogIn className="w-4 h-4 mr-2" />Sign In as {role}</>}
                    </Button>
                  </form>

                  {/* Demo buttons */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-400 text-center mb-2">Try with a demo account</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs" type="button" onClick={() => fillDemo('Client')}>
                        <User className="w-3 h-3 mr-1" /> Client Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs" type="button" onClick={() => fillDemo('CPA')}>
                        <Briefcase className="w-3 h-3 mr-1" /> CPA Demo
                      </Button>
                    </div>
                  </div>

                  <p className="text-center text-sm text-slate-500 mt-4">
                    Don't have an account?{' '}
                    <button onClick={() => setTab(TABS.SIGNUP)} className="text-blue-600 font-medium hover:underline">Sign up free</button>
                  </p>
                </>
              )}

              {/* ── SIGN UP ── */}
              {tab === TABS.SIGNUP && (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Create account</h2>
                  <p className="text-slate-500 text-sm mb-6">Start your 14-day free trial. No card required.</p>

                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input id="signup-name" type="text" placeholder="Jane Smith" value={fullName} onChange={e => setFullName(e.target.value)} required className="pl-9" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input id="signup-email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="pl-9" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Min. 8 characters" value={password} onChange={e => setPassword(e.target.value)} required className="pl-9 pr-9" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      {password.length > 0 && (
                        <p className={`text-xs mt-1 ${password.length >= 8 ? 'text-emerald-600' : 'text-red-500'}`}>
                          {password.length >= 8 ? '✓ Strong enough' : `${8 - password.length} more characters needed`}
                        </p>
                      )}
                    </div>

                    {/* Role for signup */}
                    <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
                      {['Client', 'CPA'].map(r => (
                        <button key={r} type="button" onClick={() => setRole(r)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${role === r ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
                          {r === 'Client' ? <User className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                          I'm a {r}
                        </button>
                      ))}
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                      {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><UserPlus className="w-4 h-4 mr-2" />Create Account</>}
                    </Button>
                  </form>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    By signing up you agree to our{' '}
                    <Link to="/privacy-policy" className="underline">Privacy Policy</Link>
                  </p>

                  <p className="text-center text-sm text-slate-500 mt-3">
                    Already have an account?{' '}
                    <button onClick={() => setTab(TABS.SIGNIN)} className="text-blue-600 font-medium hover:underline">Sign in</button>
                  </p>
                </>
              )}

              {/* ── FORGOT PASSWORD ── */}
              {tab === TABS.FORGOT && (
                <>
                  <button onClick={() => setTab(TABS.SIGNIN)} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-6">
                    <ArrowLeft className="w-4 h-4" /> Back to sign in
                  </button>

                  {forgotSent ? (
                    <div className="text-center py-4">
                      <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                      <h2 className="text-xl font-bold text-slate-900 mb-2">Check your email</h2>
                      <p className="text-slate-500 text-sm">
                        We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the instructions.
                      </p>
                      <Button variant="outline" className="mt-6" onClick={() => { setTab(TABS.SIGNIN); setForgotSent(false); }}>
                        Back to Sign In
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">Reset password</h2>
                      <p className="text-slate-500 text-sm mb-6">Enter your email and we'll send you a reset link.</p>

                      <form onSubmit={handleForgotPassword} className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="forgot-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input id="forgot-email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required className="pl-9" />
                          </div>
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                          {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Send Reset Link'}
                        </Button>
                      </form>
                    </>
                  )}
                </>
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
