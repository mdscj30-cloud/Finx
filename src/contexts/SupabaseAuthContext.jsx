import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const isOnline = useNetworkStatus();

  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const handleSession = useCallback(async (sessionData) => {
    try {
      setSession(sessionData);
      setUser(sessionData?.user ?? null);
      setAuthError(null);
    } catch (err) {
      console.error("[Auth Context] Error handling session:", err);
      setAuthError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    let subscription = null;

    const initializeAuth = async () => {
      try {
        setLoading(true);
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (mounted) handleSession(session);
      } catch (error) {
        console.error("[Auth Context] Initialization Error:", error);
        if (mounted) {
           setAuthError(error);
           setLoading(false);
        }
      }
    };

    initializeAuth();

    try {
        const { data } = supabase.auth.onAuthStateChange(
          async (event, currentSession) => {
            if (mounted) handleSession(currentSession);
          }
        );
        subscription = data.subscription;
    } catch(error) {
        console.error("[Auth Context] Subscription Error:", error);
    }

    return () => {
      mounted = false;
      if (subscription) subscription.unsubscribe();
    };
  }, [handleSession]);

  const signUp = useCallback(async ({ email, password, options }) => {
    if (!isOnline) {
      toast({ variant: "destructive", title: "Offline", description: "Cannot sign up while offline." });
      return { error: new Error("Offline") };
    }
    try {
      const { error } = await supabase.auth.signUp({ email, password, options });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error("[Auth Context] Sign Up Error:", error);
      toast({ variant: "destructive", title: "Sign up Failed", description: error.message });
      return { error };
    }
  }, [toast, isOnline]);

  const signIn = useCallback(async ({ email, password }) => {
    if (!isOnline) {
      toast({ variant: "destructive", title: "Offline", description: "Cannot sign in while offline." });
      return { error: new Error("Offline") };
    }
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error("[Auth Context] Sign In Error:", error);
      toast({ variant: "destructive", title: "Sign in Failed", description: error.message });
      return { error };
    }
  }, [toast, isOnline]);

  const signOut = useCallback(async () => {
    if (!isOnline) {
       toast({ variant: "destructive", title: "Offline", description: "Cannot sign out while offline." });
       return { error: new Error("Offline") };
    }
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error("[Auth Context] Sign Out Error:", error);
      toast({ variant: "destructive", title: "Sign out Failed", description: error.message });
      return { error };
    }
  }, [toast, isOnline]);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    authError,
    signUp,
    signIn,
    signOut,
  }), [user, session, loading, authError, signUp, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};